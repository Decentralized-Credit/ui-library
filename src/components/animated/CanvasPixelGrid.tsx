import React, { useEffect, useRef } from "react";

interface Pixel {
  x: number;
  y: number;
  highlight: boolean;
  animationDelay: number;
}

const CanvasPixelGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const pixelsRef = useRef<Pixel[]>([]);
  const startTimeRef = useRef<number>(0);
  const pixelSize = 3;

  const createPixels = (width: number, height: number): Pixel[] => {
    const pixelSpacing = 12;
    const highlightPercentage = 0.0125; // 1.25%

    const columns = Math.floor(width / pixelSpacing) + 1;
    const rows = Math.floor(height / pixelSpacing) + 1;

    const pixels: Pixel[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const shouldHighlight = Math.random() < highlightPercentage;
        const animationDelay = -(Math.random() * 8000);

        pixels.push({
          x: x * pixelSpacing,
          y: y * pixelSpacing,
          highlight: shouldHighlight,
          animationDelay,
        });
      }
    }

    return pixels;
  };

  const drawPixel = (
    ctx: CanvasRenderingContext2D,
    pixel: Pixel,
    currentTime: number,
  ) => {
    const animationDuration = 8000; // 8 seconds
    const time = (currentTime + pixel.animationDelay) % animationDuration;

    // Calculate color based on animation time
    let color: string;
    if (pixel.highlight) {
      if (time < 0 || time > animationDuration) {
        color = "#1B1B1B";
      } else if (
        time < animationDuration * 0.35 ||
        time > animationDuration * 0.65
      ) {
        color = "#1B1B1B";
      } else if (
        time < animationDuration * 0.4 ||
        time > animationDuration * 0.6
      ) {
        color = "#038203";
      } else {
        // Smooth transition between colors
        const progress =
          (time - animationDuration * 0.35) / (animationDuration * 0.05);
        const r1 = 27,
          g1 = 27,
          b1 = 27; // #1B1B1B
        const r2 = 3,
          g2 = 130,
          b2 = 3; // #038203

        const r = Math.round(r1 + (r2 - r1) * progress);
        const g = Math.round(g1 + (g2 - g1) * progress);
        const b = Math.round(b1 + (b2 - b1) * progress);

        color = `rgb(${r}, ${g}, ${b})`;
      }
    } else {
      color = "#1B1B1B";
    }

    ctx.fillStyle = color;
    ctx.fillRect(pixel.x, pixel.y, pixelSize, pixelSize);
  };

  const animate = (currentTime: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all pixels
    pixelsRef.current.forEach((pixel) => {
      drawPixel(ctx, pixel, currentTime);
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pixelsRef.current = createPixels(canvas.width, canvas.height);
    };

    // Initial setup
    resizeCanvas();
    startTimeRef.current = performance.now();
    animate(startTimeRef.current);

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    />
  );
};

export default CanvasPixelGrid;
