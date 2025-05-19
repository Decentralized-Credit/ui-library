import { BaseSvgProps } from "@/types";

export default function XIcon({
  width = 32,
  height = 32,
  className,
  fill = "currentColor",
  stroke = "none",
  strokeWidth = 1,
}: BaseSvgProps) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5294 2.85718H27.7553L18.3628 13.4821L29.4146 28.5714H20.6228L13.9116 19.2536L6.27023 28.5714H2.04145L12.0339 17.2321L1.42847 2.85718H10.4341L16.5165 11.4286L23.5294 2.85718ZM21.8547 25.8571H24.3342L9.10305 5.42861H6.43736L21.8547 25.8571Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
