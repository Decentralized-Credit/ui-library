import { BaseSvgProps } from "@/types";

export default function LinkedInIcon({
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
        d="M29.6312 0H2.36875C1.05938 0 0 1.03125 0 2.30625V29.6875C0 30.9688 1.05938 32 2.36875 32H29.6312C30.9406 32 32 30.9688 32 29.6938V2.30625C32 1.03125 30.9406 0 29.6312 0ZM9.49062 27.2687H4.74375V12H9.49062V27.2687ZM7.11875 9.9375C5.59688 9.9375 4.37188 8.7125 4.37188 7.19688C4.37188 5.68125 5.59688 4.45625 7.11875 4.45625C8.63438 4.45625 9.85938 5.68125 9.85938 7.19688C9.85938 8.70625 8.63438 9.9375 7.11875 9.9375ZM27.2687 27.2687H22.5281V19.8375C22.5281 18.0625 22.4969 15.775 20.0563 15.775C17.5844 15.775 17.2094 17.7125 17.2094 19.7125V27.2687H12.4688V12H17.0156V14.0625H17.0781C17.7531 12.8781 19.2906 11.625 21.5781 11.625C26.3875 11.625 27.2687 14.8219 27.2687 18.975V27.2687Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
