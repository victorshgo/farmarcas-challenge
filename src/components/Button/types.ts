export interface ButtonProps {
  icon?: JSX.Element;
  text?: string;
  size?: "large" | "medium";
  color?: string;
  onClick?: () => void;
}

export interface ButtonStyledProps {
  size?: "large" | "medium";
  color?: string;
}
