import { BaseSvgProps } from "@/types";

export default function Diamond({
  width = 200,
  height,
  className,
  fill,
  stroke = "#333333",
  strokeWidth = 1,
}: BaseSvgProps) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 443 401"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "visible",
      }}
    >
      <path
        strokeWidth={strokeWidth}
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.8335 2.0733H360.833L440.833 141.607L220.833 400.74L0.833496 141.607L80.8335 2.0733Z"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeWidth={strokeWidth}
        fill={fill}
        d="M80.8335 2.0733L220.833 400.74L360.833 2.0733"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeWidth={strokeWidth}
        fill={fill}
        d="M0.833496 140.74H440.833"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeWidth={strokeWidth}
        fill={fill}
        d="M131.5 142.073L221.5 2.0733L311.5 142.073"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
