export type ChartDataPoint = Record<string, string | number>;
import { ChartConfig } from "@/components/ui/chart";

interface ChartProps {
  chartConfig: ChartConfig;
  height?: string;
  width?: string;
  className?: string;
}

interface BarConfig {
  dataKey: string;
  fill: string;
  radius?: number;
}

type TickFormatter = (value: number | string) => string;

export interface BarChartProps extends ChartProps {
  chartData: ChartDataPoint[];
  xAxisKey: string;
  barKeys: BarConfig[];
  yAxisOrientation?: "left" | "right";
  xAxisTickFormatter?: TickFormatter;
  yAxisTickFormatter?: TickFormatter;
  xAxisInterval?: AxisInterval;
  cartesianGrid?: { vertical: boolean; horizontal: boolean };
  chartTooltipContent?:
    | ((contentProps: TooltipProps<string, string>) => React.ReactNode)
    | React.ReactElement;
  chartLegendContent?: React.ReactElement;
  tooltipCursorClassName?: string;
  activeBarStyle?: ActiveShape<BarProps, SVGPathElement>;
  yAxisDomainMultiplier?: number;
  showSummary?: boolean;
}

export interface CustomLineChartProps extends ChartProps {
  chartData: Array<{
    [key: string]: string | number;
  }>;
  xAxisKey: string;
  lineKeys: LineKeyConfig[];
  showLegend?: boolean;
  showTooltip?: boolean;
  tooltipIndicator?: "line" | "dot";
  hideTooltipLabel?: boolean;
}

export interface PieChartProps extends ChartProps {
  chartData: PieDataPoint[];
  size?: string;
  dataKey: string;
  nameKey: string;
  innerRadius?: number;
  children?: React.ReactNode;
}
