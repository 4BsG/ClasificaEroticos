import { ButtonFilterProps } from ".";
import { TbFilter } from "react-icons/tb";
import { useState } from "react";

export const ButtonFilter: React.FC<ButtonFilterProps> = (prop) => {
  const { children } = prop;

  const [ isHidden, setIsHidden ] = useState(true);

  const toogle = () => setIsHidden(!isHidden);
  
  return (
    <>
      <button className={`btn-filter ${!isHidden ? "is-active" : ""}`} onClick={toogle}>
        <TbFilter />
        <ul className={`btn-filter-menu absolute ${isHidden ? "is-hidden" : ""}`}>
          {children}
        </ul>
      </button>
    </>
  );
}
