import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Square } from "@/types";

const squareSize = 3;
const spacing = 12;

const darkGray = "#050505";
const gray = "#303030";
const green = "#00ff00";

function interpolateColor(color1: string, color2: string, factor: number) {
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export default function DotGrid({
  backgroundColor = darkGray,
  squareColor = gray,
  className = "",
  animationSpeed = 1000,
  maxActiveSquares = 25,
  transitionDuration = 500,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [observer, setObserver] = useState<ResizeObserver | null>(null);
  const animationRef = useRef<number | null>(null);
  const squaresRef = useRef<Square[] | null>(null);
  const activeSquaresRef = useRef(new Set());

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.observe(containerRef.current);
    setObserver(resizeObserver);

    return () => {
      if (observer) observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const totalSpacing = squareSize + spacing;
    const numSquaresX = Math.floor(dimensions.width / totalSpacing);
    const numSquaresY = Math.floor(dimensions.height / totalSpacing);

    const squares = [];
    for (let y = 0; y < numSquaresY; y++) {
      for (let x = 0; x < numSquaresX; x++) {
        squares.push({
          x: x * totalSpacing,
          y: y * totalSpacing,
          color: squareColor,
          active: false,
          timeRemaining: 0,
          transitionPhase: "none" as const,
          transitionProgress: 0,
        });
      }
    }
    squaresRef.current = squares;
    activeSquaresRef.current.clear();

    drawSquares();

    if (!animationRef.current) {
      startAnimation();
    }
  }, [dimensions, squareColor]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const drawSquares = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = (canvas as HTMLCanvasElement).getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    squaresRef.current?.forEach((square) => {
      let displayColor = square.color;

      if (square.transitionPhase === "fadeIn") {
        displayColor = interpolateColor(
          squareColor,
          green,
          square.transitionProgress,
        );
      } else if (square.transitionPhase === "fadeOut") {
        displayColor = interpolateColor(
          green,
          squareColor,
          square.transitionProgress,
        );
      }

      ctx.fillStyle = displayColor;
      ctx.fillRect(square.x, square.y, squareSize, squareSize);
    });
  };

  const startAnimation = () => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      squaresRef.current?.forEach((square) => {
        if (square.transitionPhase === "fadeIn") {
          square.transitionProgress += deltaTime / transitionDuration;

          if (square.transitionProgress >= 1) {
            square.transitionProgress = 1;
            square.transitionPhase = "none";
            square.color = green;
          }
        } else if (square.transitionPhase === "fadeOut") {
          square.transitionProgress += deltaTime / transitionDuration;

          if (square.transitionProgress >= 1) {
            square.transitionProgress = 0;
            square.transitionPhase = "none";
            square.color = squareColor;
            square.active = false;
            activeSquaresRef.current.delete(`${square.x},${square.y}`);
          }
        }

        if (square.active) {
          square.timeRemaining -= deltaTime;

          if (
            square.timeRemaining <= 0 &&
            square.transitionPhase !== "fadeOut"
          ) {
            square.transitionPhase = "fadeOut";
            square.transitionProgress = 0;
          }
        }
      });

      if (activeSquaresRef.current.size < maxActiveSquares) {
        const inactiveSquares = squaresRef.current?.filter(
          (square) => !square.active && square.transitionPhase === "none",
        );

        if (!inactiveSquares?.length) return;

        const numToActivate = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numToActivate; i++) {
          if (activeSquaresRef.current.size >= maxActiveSquares) break;

          const randomIndex = Math.floor(
            Math.random() * inactiveSquares.length,
          );
          const square = inactiveSquares[randomIndex];

          inactiveSquares.splice(randomIndex, 1);

          square.active = true;
          square.transitionPhase = "fadeIn";
          square.transitionProgress = 0;
          square.timeRemaining =
            animationSpeed + Math.random() * animationSpeed;
          activeSquaresRef.current.add(`${square.x},${square.y}`);
        }
      }

      drawSquares();

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full opacity-50", className)}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="bg-background h-full w-full"
      />
    </div>
  );
}
