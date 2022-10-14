import { ReactNode } from "react";

export interface ButtonProps {
  label: string,
  icon?: boolean,
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

export interface ButtonIconProps {
  label?: string,
  icon: "like" | "trash" | "next" | "play" | "close" | "doubleNext" | "prev" | "doublePrev",
  className?: string,
  size: "s" | "m" | "l",
  type?: "delete" | "delete-round" | "close" | "play",
  action: () => void,
}

export interface ButtonFilterProps {
  children: JSX.Element | JSX.Element[],
}
