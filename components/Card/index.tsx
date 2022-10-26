import { ReactNode } from "react";

type Image = {
  src: string,
  width?: number,
  height?: number,
  alt: string,
}

export interface CardAccountTypeProps {
  children: ReactNode,
  image: Image,
  title: string,
  descrption?: string,
  className?: string,
}

export interface CardCTAProps {
  children: JSX.Element,
  image: Image,
  title: string,
  descrption?: string,
  className?: string,
}

export interface CardServicesProps {
  image: Image,
  tags: string[],
  className?: string,
  action: () => void,
}
