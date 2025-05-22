import { LoadingIndicatorProps } from "@/types";
import styles from "./styles.module.css";

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
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={`${isLoading ? styles.loadingIcon : ""} ${className}`}
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
        className={styles.bottomRect}
      />
      <rect
        x="13"
        width="13"
        height="13"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={styles.topRect}
      />
    </svg>
  );
}
