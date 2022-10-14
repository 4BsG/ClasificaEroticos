import { ButtonProps } from ".";
import { FaPen } from "react-icons/fa";

export const Button: React.FC<ButtonProps> = (prop) => {
  const {
    label,
    icon = false,
    className = "",
    size = "m",
    type = "button",
    variant,
    isDisabled = false,
    action
  } = prop;

  return (
    <>
      <button
        type={type}
        disabled={isDisabled}
        onClick={action}
        className={`btn ${isDisabled ? "btn-quiet" : `btn-${variant}`} btn-size-${size} ${className}`}
      >
        {icon && <FaPen />}
        {label}
      </button>
    </>
  );
}
