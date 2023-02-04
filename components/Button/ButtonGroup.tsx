import { ButtonGroupProps } from ".";

export const ButtonGroup: React.FC<ButtonGroupProps> = (prop) => {
  const {
    children,
    className = "",
    orientation = "horizontal",
    align = "center",
  } = prop;

  return (
    <>
      <div 
        className={`btn-group ${orientation === "vertical" ? "flex-col" : ""} ${align} ${className}`}
      >
        {children}
      </div>
    </>
  );
}
