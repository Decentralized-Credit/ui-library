import { useRef, useEffect } from "react";
import { AnimatedGlobeProps, DotShape } from "@/types";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  CanvasTexture,
  LineBasicMaterial,
  Color,
  Group,
  BufferGeometry,
  Float32BufferAttribute,
  Line,
  PointsMaterial,
  Points,
} from "three";

const AnimatedGlobe = ({
  size = 300,
  lineColor = "#00FF66",
  speed = 0.00025,
  latLineSpacing = 12,
  longLineSpacing = 12,
  numDots = 50,
  dotColor = "#00FF66",
  dotSize = 0.01,
  dotShape = "diamond",
  className = "",
}: AnimatedGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 1.5; // Move camera closer for bigger globe appearance

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true, // Enable transparency
    });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current?.appendChild(renderer.domElement);

    // Create a sphere for the globe - use slightly larger radius to fill canvas
    const radius = 0.85; // Larger radius to fill more of the canvas

    // Create a texture based on the selected shape
    function createShapeTexture(shape: DotShape) {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;

      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "white";

        if (shape === "circle") {
          // Draw a filled circle
          context.beginPath();
          context.arc(32, 32, 30, 0, 2 * Math.PI, false);
          context.fill();
        } else if (shape === "square") {
          // Draw a filled square
          context.fillRect(2, 2, 60, 60);
        } else if (shape === "diamond") {
          // Draw a filled diamond (rotated square)
          context.translate(32, 32);
          context.rotate(Math.PI / 4); // 45 degrees
          context.fillRect(-21, -21, 42, 42);
          context.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        }
      }

      const texture = new CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    // First create the grid lines but don't add them to the scene yet
    const wireframeMaterial = new LineBasicMaterial({
      color: new Color(lineColor),
      transparent: true,
      opacity: 0.6, // Make lines slightly transparent
      depthWrite: false, // This prevents grid lines from obscuring dots
    });

    const gridLines = new Group();

    // Create latitude lines
    for (let lat = -90 + latLineSpacing; lat < 90; lat += latLineSpacing) {
      const latRad = (lat * Math.PI) / 180;
      const latGeometry = new BufferGeometry();
      const vertices: number[] = [];

      for (let lon = 0; lon <= 360; lon += 2) {
        const lonRad = (lon * Math.PI) / 180;
        const x = radius * Math.cos(latRad) * Math.cos(lonRad);
        const y = radius * Math.sin(latRad);
        const z = radius * Math.cos(latRad) * Math.sin(lonRad);

        vertices.push(x, y, z);
      }

      latGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(vertices, 3),
      );
      const latLine = new Line(latGeometry, wireframeMaterial);
      gridLines.add(latLine);
    }

    // Create longitude lines
    for (let lon = 0; lon < 360; lon += longLineSpacing) {
      const lonRad = (lon * Math.PI) / 180;
      const lonGeometry = new BufferGeometry();
      const vertices: number[] = [];

      for (let lat = -90; lat <= 90; lat += 2) {
        const latRad = (lat * Math.PI) / 180;
        const x = radius * Math.cos(latRad) * Math.cos(lonRad);
        const y = radius * Math.sin(latRad);
        const z = radius * Math.cos(latRad) * Math.sin(lonRad);

        vertices.push(x, y, z);
      }

      lonGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(vertices, 3),
      );
      const lonLine = new Line(lonGeometry, wireframeMaterial);
      gridLines.add(lonLine);
    }

    // Add grid lines to scene first (they'll render behind the dots)
    scene.add(gridLines);

    // Now create random dots on the globe surface
    const dotMaterial = new PointsMaterial({
      color: new Color(dotColor),
      size: dotSize,
      sizeAttenuation: true,
      map: createShapeTexture(dotShape),
      transparent: true,
      alphaTest: 0.1,
      depthTest: false, // Disable depth testing so dots always render on top
      depthWrite: false, // Don't write to depth buffer
    });

    const dotPositions: number[] = [];

    for (let i = 0; i < numDots; i++) {
      // Random spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      // Convert to Cartesian coordinates on sphere
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      dotPositions.push(x, y, z);
    }

    const dotsGeometry = new BufferGeometry();
    dotsGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(dotPositions, 3),
    );

    // Create dots and add them to scene last
    const dots = new Points(dotsGeometry, dotMaterial);
    dots.renderOrder = 1; // Ensure dots render after grid lines
    scene.add(dots);

    // Animation function
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the camera around the globe
      const time = Date.now() * speed;
      camera.position.x = Math.cos(time) * 1.5;
      camera.position.z = Math.sin(time) * 1.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, [
    size,
    lineColor,
    speed,
    latLineSpacing,
    longLineSpacing,
    numDots,
    dotColor,
    dotSize,
    dotShape,
  ]);

  return (
    <div
      className={`flex h-full w-full items-center justify-center overflow-hidden rounded-xl ${className}`}
    >
      <div ref={containerRef} className="h-full w-full"></div>
    </div>
  );
};

export default AnimatedGlobe;
