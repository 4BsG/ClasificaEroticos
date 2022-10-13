import { ButtonNavProps } from ".";
import { BsArrowRight, BsArrowLeft, BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

interface IconList {
  next: JSX.Element,
  doubleNext: JSX.Element,
  prev: JSX.Element,
  doublePrev: JSX.Element,
}

export const ButtonNav: React.FC<ButtonNavProps> = (prop) => {
  const {
    label,
    className = "",
    orientation,
    size,
    action,
  } = prop;

  const icons: IconList = {
    next: <BsArrowRight />,
    doubleNext: <BsChevronDoubleRight />,
    prev: <BsArrowLeft />,
    doublePrev: <BsChevronDoubleLeft />,
  }

  return (
    <>
      <div className={`btn-nav btn-nav-${size} ${className}`} onClick={action}>
        {icons[orientation]}
        <span>{label}</span>
      </div>
    </>
  );
}
