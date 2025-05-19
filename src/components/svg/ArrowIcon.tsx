interface ArrowIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function ArrowIcon({
  width = 32,
  height,
  className,
  fill = "currentColor",
  stroke = "none",
  strokeWidth = 1,
}: ArrowIconProps) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 243 364"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 363L1 243H121L121 363H1Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M1 121L1 1L121 1L121 121L1 121Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M122 242L122 122L242 122V242H122Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
