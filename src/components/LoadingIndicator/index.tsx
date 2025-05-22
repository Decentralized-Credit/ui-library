import { LoadingIndicatorProps } from "@/types";

const keyframes = `
@keyframes rotationFromBottomLeft {
  0%, 100% { transform: translate(0, 0) }
  20%, 25% { transform: translate(0, -50%) }
  40%, 45% { transform: translate(50%, -50%) }
  60%, 65% { transform: translate(50%, 0) }
}

@keyframes rotationFromTopRight {
  0%, 100% { transform: translate(0, 0) }
  20%, 25% { transform: translate(0, 50%) }
  40%, 45% { transform: translate(-50%, 50%) }
  60%, 65% { transform: translate(-50%, 0) }
}
`;

export default function LoadingIndicator({
  width = 26,
  height,
  className = "",
  fill = "currentColor",
  stroke = "none",
  strokeWidth = 1,
  isLoading = true,
}: LoadingIndicatorProps) {
  return (
    <>
      <style>{keyframes}</style>
      <svg
        preserveAspectRatio="xMidYMid meet"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: "visible",
        }}
      >
        <rect
          y="13"
          width="13"
          height="13"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          style={{
            animation: isLoading
              ? "rotationFromBottomLeft 3s ease infinite"
              : "none",
          }}
        />
        <rect
          x="13"
          width="13"
          height="13"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          style={{
            animation: isLoading
              ? "rotationFromTopRight 3s ease infinite"
              : "none",
          }}
        />
      </svg>
    </>
  );
}
