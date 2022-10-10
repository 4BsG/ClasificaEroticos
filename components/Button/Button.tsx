import { ButtonProps } from ".";

export const Button: React.FC<ButtonProps> = (prop) => {
  const {
    label,
    icon = undefined,
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
        <i className={icon}></i>
        {label}
      </button>
    </>
  );
}
