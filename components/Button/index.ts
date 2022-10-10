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
