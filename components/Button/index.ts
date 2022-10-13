import { ReactNode } from "react";

export interface ButtonProps {
  label: string,
  icon?: string | undefined,
  className?: string,
  size?: "xs" | "s" | "m" | "l" | "xl",
  type?: "button" | "submit",
  variant: "primary" | "secondary" | "quiet",
  isDisabled?: boolean,
  action: () => void,
}

export interface ButtonGroupProps {
  children: ReactNode,
  className?: string,
  orientation?: "vertical" | "horizontal",
  align?: "center" | "start" | "end",
}

export interface ButtonNavProps {
  children: ReactNode,
  className?: string,
  orientation?: "reverse",
  size: "s" | "m",
  action: () => void,
}

export interface ButtonIconProps {
  icon: string,
  className?: string,
  background: "circle" | "square" | "none",
  color: "primary",
  action: () => void,
}

export interface ButtonFilterProps {
  children: ReactNode,
  action: () => void,
}
