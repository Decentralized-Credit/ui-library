import React, { useEffect, useState } from "react";
import { AnimatedPathGraphicProps } from "@/types";

export default function AnimatedPathGraphic({
  svg,
  width = 200,
  height,
  baseColor = "text-primary",
  glowColor = "text-primary",
  duration = 6,
  delay = 0,
  stagger = 0.4,
  useStroke = false,
  glowIntensity = 5,
  strokeWidth = 1,
  loop = true,
  loopCount = "infinite",
  className = "",
}: AnimatedPathGraphicProps) {
  // State for animation styles
  const [animationStyles, setAnimationStyles] = useState<{ __html: string }>({
    __html: "",
  });

  // Generate a unique ID for this component instance
  const [uniqueId] = useState(
    () => `animated-path-${Math.random().toString(36).substring(2, 11)}`,
  );

  // Create the CSS for path animations
  useEffect(() => {
    // Generate CSS keyframes and styles
    const styles = document.createElement("style");
    const infiniteLoop = loop && loopCount === "infinite";

    if (useStroke) {
      styles.innerHTML = `
        @keyframes drawPath-${uniqueId} {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: ${infiniteLoop ? 1000 : 0};
            opacity: ${infiniteLoop ? 0 : 1};
          }
        }
        
        @keyframes glowPulse-${uniqueId} {
          0% {
            filter: drop-shadow(0 0 ${glowIntensity * 0.5}px currentColor);
          }
          100% {
            filter: drop-shadow(0 0 ${glowIntensity * 2}px currentColor) 
                   drop-shadow(0 0 ${glowIntensity}px currentColor);
          }
        }
        
        #${uniqueId} .static-path path {
          fill: none;
          stroke: currentColor;
          stroke-width: 0.5;
          opacity: 0.3;
          vector-effect: non-scaling-stroke;
        }
        
        #${uniqueId} .animated-path path {
          fill: none;
          stroke: currentColor;
          stroke-width: ${strokeWidth};
          stroke-dasharray: 1000;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
          will-change: stroke-dashoffset, opacity, filter;
        }
        
        ${Array.from({ length: 20 }, (_, i) => {
          const pathDelay = delay + i * stagger;
          return `
            #${uniqueId} .animated-path path:nth-child(${i + 1}) {
              animation: 
                drawPath-${uniqueId} ${duration}s linear ${loop ? loopCount : 1},
                glowPulse-${uniqueId} ${duration * 0.8}s linear infinite alternate;
              animation-delay: ${pathDelay}s, ${pathDelay * 0.5}s;
              animation-fill-mode: forwards;
            }
          `;
        }).join("\n")}
      `;
    } else {
      styles.innerHTML = `
        @keyframes fadeInOut-${uniqueId} {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes glowPulse-${uniqueId} {
          0% {
            filter: drop-shadow(0 0 ${glowIntensity * 0.5}px currentColor);
          }
          100% {
            filter: drop-shadow(0 0 ${glowIntensity * 2}px currentColor) 
                   drop-shadow(0 0 ${glowIntensity}px currentColor);
          }
        }
        
        #${uniqueId} .static-path path {
          fill: currentColor;
          stroke: none;
          opacity: 0.3;
          vector-effect: non-scaling-stroke;
        }
        
        #${uniqueId} .animated-path path {
          fill: currentColor;
          stroke: none;
          vector-effect: non-scaling-stroke;
          will-change: opacity, filter;
        }
        
        ${Array.from({ length: 20 }, (_, i) => {
          const pathDelay = delay + i * stagger;
          return `
            #${uniqueId} .animated-path path:nth-child(${i + 1}) {
              animation: 
                fadeInOut-${uniqueId} ${duration}s linear ${loop ? loopCount : 1},
                glowPulse-${uniqueId} ${duration * 0.8}s linear infinite alternate;
              animation-delay: ${pathDelay}s, ${pathDelay * 0.5}s;
              animation-fill-mode: forwards;
            }
          `;
        }).join("\n")}
      `;
    }

    // Apply the generated styles
    setAnimationStyles({ __html: styles.innerHTML });

    // Cleanup function
    return () => {
      // Remove style element if it was added to the DOM
      if (styles.parentNode) {
        styles.parentNode.removeChild(styles);
      }
    };
  }, [
    uniqueId,
    duration,
    delay,
    stagger,
    glowIntensity,
    useStroke,
    strokeWidth,
    loop,
    loopCount,
  ]);

  // Process and render the SVG content
  const SvgContent = () => {
    const svgElement = svg as React.ReactElement<React.SVGProps<SVGSVGElement>>;
    const svgProps = svgElement.props;

    return React.cloneElement(svgElement, {
      width: svgProps.width ?? width,
      className: "text-current w-full h-full",
      fill: useStroke ? "none" : "currentColor",
      stroke: useStroke ? "currentColor" : "none",
      strokeWidth: useStroke ? strokeWidth : 0,
      preserveAspectRatio: "xMidYMid meet",
      vectorEffect: "non-scaling-stroke",
    });
  };

  return (
    <div
      id={uniqueId}
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        boxSizing: "content-box",
        width,
        height,
      }}
    >
      <style dangerouslySetInnerHTML={animationStyles} />

      <div className="relative h-full w-full overflow-visible">
        {/* Static path (background) */}
        <div className={`static-path relative ${baseColor}`}>
          <SvgContent />
        </div>

        {/* Animated path (foreground) */}
        <div className={`animated-path absolute inset-0 ${glowColor}`}>
          <SvgContent />
        </div>
      </div>
    </div>
  );
}
