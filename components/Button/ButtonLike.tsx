import { useState } from "react";
import { ButtonLikeProps } from ".";
import { RiHeart3Line } from 'react-icons/ri';

export const ButtonLike: React.FC<ButtonLikeProps> = (prop) => {
  const {
    label,
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
        <RiHeart3Line/>
        {label && <span>{label}</span>}
      </div>
    </>
  );
}
