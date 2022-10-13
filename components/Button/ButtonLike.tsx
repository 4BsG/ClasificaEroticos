import { useState } from "react";
import { ButtonNavProps } from ".";

export const ButtonLike: React.FC<ButtonNavProps> = (prop) => {
  const {
    children,
    className = "",
    size,
    action,
  } = prop;

  const [ like, setLike ] = useState(false);

  const toggleColor = () => {
    action()
    setLike(!like)
  }

  return (
    <>
      <div className={`btn-like btn-like-${size} ${like ? "text-primary" : "none"} ${className}`} onClick={toggleColor}>
        {children}
      </div>
    </>
  );
}
