import { ButtonIconProps } from ".";

export const ButtonIcon: React.FC<ButtonIconProps> = (prop) => {
  const {
    icon,
    className = "",
  } = prop;

  return (
    <>
      <div className={`btn-nav ${className}`}>
        <i>{icon}</i>
      </div>
    </>
  );
}
