import { ReactNode } from "react";

interface WC {
  className?: string;
}

export interface CardContentProps extends WC {
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

export interface CardListProps extends WC {
  heading: string;
  items: CardListItem[];
  noIcons?: boolean;
  backgroundDark?: boolean;
}

export interface CardStepProps extends WC {
  number: number;
  title: string;
  description: React.ReactNode;
}
