import { ButtonFilterProps } from ".";
import { TbFilter } from "react-icons/tb";

export const ButtonFilter: React.FC<ButtonFilterProps> = (prop) => {
  const { children } = prop;

  return (
    <>
      <div>
        <TbFilter />
        {children}
      </div>
    </>
  );
}
