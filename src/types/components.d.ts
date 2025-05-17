import { ReactNode } from "react";

export interface CardContentProps {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundDark?: boolean;
  className?: string;
}

export interface CardListItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface CardListProps {
  heading: string;
  items: CardListItem[];
  noIcons?: boolean;
  backgroundDark?: boolean;
  className?: string;
}
