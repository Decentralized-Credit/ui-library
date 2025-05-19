import { ReactNode } from "react";

interface WithClassName {
  className?: string;
}

interface WithDimensions {
  width?: number;
  height?: number;
}

interface WithColorScheme {
  primaryColor?: string;
  secondaryColor?: string;
}

export interface CardContentProps extends WithClassName, WithColorScheme {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundDark?: boolean;
}

export interface CardListItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface CardListProps extends WithClassName {
  heading: string;
  items: CardListItem[];
  noIcons?: boolean;
  backgroundDark?: boolean;
}

export interface CardStepProps extends WithClassName {
  number: number;
  title: string;
  description: React.ReactNode;
}

export type DotShape = "circle" | "square" | "diamond";

export interface AnimatedGlobeProps extends WithClassName {
  size?: number;
  lineColor?: string;
  speed?: number;
  latLineSpacing?: number;
  longLineSpacing?: number;
  numDots?: number;
  dotColor?: string;
  dotSize?: number;
  dotShape?: DotShape;
}

export interface AnimatedPathGraphicProps
  extends WithClassName,
    WithDimensions {
  svg: React.ReactNode;
  baseColor?: string;
  glowColor?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  useStroke?: boolean;
  glowIntensity?: number;
  strokeWidth?: number;
  loop?: boolean;
  loopCount?: number | "infinite";
}

export interface BaseSvgProps extends WithClassName, WithDimensions {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export interface LogoStackedProps extends BaseSvgProps {
  variant?: "sm" | "md" | "lg";
}

export interface ColorSchemeSvgProps
  extends WithClassName,
    WithDimensions,
    WithColorScheme {}
