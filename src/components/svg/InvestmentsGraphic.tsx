import { BaseSvgProps } from "@/types";

export default function InvestmentsGraphic({
  width = 200,
  height,
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
      viewBox="62 359 460 354"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "visible",
      }}
    >
      <path
        d="M399 623 L506 561 L506 636 L399 574 L399 500 L293 561 L399 623 L399 697 L293 636 L293 561"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M399 697 L506 636"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M186 574 L79 512 L79 438 L186 500 L186 574 L293 512 L293 438 L399 500 L506 561"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M186 500 L293 438 L186 376 L186 451 L293 512 L399 574 L293 636"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M186 451 L79 512"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M79 438 L186 376"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M399 500 L506 438 L506 512 L399 574"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M506 438 L399 376 L399 451 L506 512"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M399 451 L293 512"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M293 438 L399 376"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
