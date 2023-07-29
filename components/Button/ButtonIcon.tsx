import { useState } from "react";
import { ButtonIconProps } from ".";

import { RiHeart3Line } from 'react-icons/ri';
import { GoTrash } from 'react-icons/go';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsArrowRight, BsArrowLeft, BsChevronDoubleRight, BsChevronDoubleLeft, BsPlayFill } from "react-icons/bs";

interface IconList {
  like: JSX.Element,
  trash: JSX.Element,
  play: JSX.Element,
  close: JSX.Element,
  next: JSX.Element,
  doubleNext: JSX.Element,
  prev: JSX.Element,
  doublePrev: JSX.Element,
}

export const ButtonIcon: React.FC<ButtonIconProps> = (prop) => {
  const {
    label,
    icon,
    className = "",
    size,
    type,
    action,
  } = prop;

  const icons: IconList = {
    like: <RiHeart3Line />,
    trash: <GoTrash />,
    play: <BsPlayFill />,
    close: <IoCloseCircleOutline />,
    next: <BsArrowRight />,
    doubleNext: <BsChevronDoubleRight />,
    prev: <BsArrowLeft />,
    doublePrev: <BsChevronDoubleLeft />,
  }

  const [ like, setLike ] = useState(false);
  const toggleState = () => {
    action()
    setLike(!like)
  }
  
  return (
    <>
      <button
        className={
          [
            "btn-icon",
            `btn-icon-${size}`,
            `${type ? `btn-icon-${type}` : ""}`,
            `${like && icon === "like" ? "text-primary" : ""}`,
            `${className}`
          ]
            .join(" ")
        }
        onClick={toggleState}
      >
        {icons[icon]}
        {label && <span>{label}</span>}
      </button>
    </>
  );
}
