import { useState } from "react";
import { Bar, BarChart, YAxis, CartesianGrid, XAxis } from "recharts";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartProps, ChartDataPoint } from "@/types";

export default function CustomBarChart({
  chartConfig,
  chartData,
  xAxisKey,
  barKeys,
  height = "h-auto",
  width = "h-auto",
  className,
  yAxisOrientation = "left",
  xAxisInterval = undefined,
  xAxisTickFormatter = (value) => value.toString().slice(0, 3),
  yAxisTickFormatter = (value) => value.toLocaleString(),
  cartesianGrid = { vertical: false, horizontal: true },
  chartTooltipContent = <ChartTooltipContent />,
  chartLegendContent = <ChartLegendContent />,
  tooltipCursorClassName = "",
  activeBarStyle,
  yAxisDomainMultiplier = 1,
  showSummary = false,
}: BarChartProps) {
  const [activeBar, setActiveBar] = useState<ChartDataPoint | null>(null);

  return (
    <div className="relative">
      {activeBar && showSummary && (
        <div className="absolute top-0 left-0">
          <p className="py-1 text-2xl text-green-200">
            {Object.values(activeBar)[0]}
          </p>
          <p className="text-muted-foreground">{Object.values(activeBar)[1]}</p>
        </div>
      )}
      <ChartContainer
        config={chartConfig}
        className={cn(height, width, "max-w-full", className)}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          className={`[&_.recharts-tooltip-cursor]:!${tooltipCursorClassName}`}
        >
          <CartesianGrid {...cartesianGrid} />
          <XAxis
            dataKey={xAxisKey}
            tickLine={false}
            tickMargin={10}
            interval={xAxisInterval}
            axisLine={false}
            tickFormatter={xAxisTickFormatter}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            orientation={yAxisOrientation}
            tickFormatter={yAxisTickFormatter}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            domain={([_, dataMax]) => [0, dataMax * yAxisDomainMultiplier]}
          />
          <ChartTooltip content={chartTooltipContent} />
          <ChartLegend content={chartLegendContent} />
          {barKeys.map((key) => {
            return (
              <Bar
                key={key.dataKey}
                dataKey={key.dataKey}
                fill={key.fill}
                radius={key?.radius ?? 4}
                activeBar={activeBarStyle}
                onMouseOver={(data) => setActiveBar(data.payload)}
              />
            );
          })}
        </BarChart>
      </ChartContainer>
    </div>
  );
}
