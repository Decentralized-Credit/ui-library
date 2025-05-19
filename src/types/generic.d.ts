export interface Pixel {
  x: number;
  y: number;
  highlight: boolean;
  animationDelay: number;
}

export interface Square {
  x: number;
  y: number;
  color: string;
  active: boolean;
  timeRemaining: number;
  transitionPhase: "none" | "fadeIn" | "fadeOut";
  transitionProgress: number;
}
