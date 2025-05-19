import type { Meta, StoryObj } from "@storybook/react";
import { CustomLineChart } from "@/components";
import {
  lineChartConfig1,
  lineChartData1,
  lineChartConfig2,
  lineChartData2,
} from "./data";

const meta = {
  title: "Components/Charts/LineChart",
  component: CustomLineChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    chartConfig: lineChartConfig1,
    chartData: lineChartData1,
    xAxisKey: "month",
    className: "mx-auto",
    height: "h-[400px]",
    lineKeys: [
      {
        dataKey: "desktop",
        stroke: "var(--color-desktop)",
        type: "natural",
        strokeWidth: 3,
      },
      {
        dataKey: "mobile",
        stroke: "var(--color-mobile)",
        type: "step",
      },
    ],
    tooltipIndicator: "dot",
  },
};

export const Example2: Story = {
  args: {
    chartConfig: lineChartConfig2,
    chartData: lineChartData2,
    xAxisKey: "month",
    className: "mx-auto",
    height: "h-[600px]",
    width: "w-[800px]",
    lineKeys: [
      {
        dataKey: "growth",
        stroke: "hsl(var(--accent))",
        type: "linear",
        strokeWidth: 4,
      },
    ],
    tooltipIndicator: "line",
    hideTooltipLabel: true,
  },
};
