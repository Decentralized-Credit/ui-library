import { BaseSvgProps } from "@/types";

export default function Ethereum({
  width = 200,
  height,
  className,
  fill,
  stroke = "#000000",
  strokeWidth = 1,
}: BaseSvgProps) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 250 401"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "visible",
      }}
    >
      <path
        d="M124.703 275.717L1.58686 203.117L124.703 2.51058V275.717Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M125.204 147.71L2 203.289"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M124.703 301.491V399.201L2.51078 231.007L124.703 301.491Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M125.704 275.717V2.51068L248.813 203.117L125.704 275.717Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M125.203 147.71L248.399 203.289"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M125.703 399.201V301.491L247.888 231.007L125.703 399.201Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    </svg>
  );
}
