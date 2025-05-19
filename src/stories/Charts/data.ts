import { Monitor, Smartphone, ShoppingCart, TrendingUp } from "lucide-react";

export const barchartData1 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const barchartConfig1 = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    color: "hsl(var(--chart-2))",
  },
};

export const barchartData2 = [
  { category: "Electronics", sales: 1200 },
  { category: "Clothing", sales: 850 },
  { category: "Books", sales: 2300 },
  { category: "Home", sales: 640 },
  { category: "Sports", sales: 980 },
  { category: "Toys", sales: 1500 },
  { category: "Grocery", sales: 1000 },
  { category: "Health", sales: 1200 },
  { category: "Beauty", sales: 850 },
  { category: "Automotive", sales: 2300 },
  { category: "Other", sales: 640 },
];

export const barchartConfig2 = {
  sales: {
    label: "Units Sold",
    icon: ShoppingCart,
  },
};

export const lineChartData1 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const lineChartConfig1 = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    color: "hsl(var(--chart-2))",
  },
};

export const lineChartData2 = [
  { month: "January", growth: 12.5 },
  { month: "February", growth: 18.2 },
  { month: "March", growth: 15.7 },
  { month: "April", growth: 22.3 },
  { month: "May", growth: 19.8 },
  { month: "June", growth: 25.4 },
];

export const lineChartConfig2 = {
  growth: {
    label: "Growth Rate",
    icon: TrendingUp,
    color: "hsl(var(--chart-1))",
  },
};

export const pieChartData1 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

export const pieChartConfig1 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export const pieChartData2 = [
  { company: "Amazon", share: 38, fill: "var(--color-amazon)" },
  { company: "Microsoft", share: 28, fill: "var(--color-microsoft)" },
  { company: "Google", share: 22, fill: "var(--color-google)" },
  { company: "Others", share: 12, fill: "var(--color-others)" },
];

export const pieChartConfig2 = {
  share: {
    label: "Market Share",
  },
  amazon: {
    label: "Amazon",
    color: "hsl(var(--accent))",
  },
  microsoft: {
    label: "Microsoft",
    color: "rebeccapurple",
  },
  google: {
    label: "Google",
    color: "indianred",
  },
  others: {
    label: "Others",
    color: "hsl(var(--accent))",
  },
};
