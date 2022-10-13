import { ButtonNavProps } from ".";

export const ButtonNav: React.FC<ButtonNavProps> = (prop) => {
  const {
    children,
    className = "",
    orientation,
    size,
    action,
  } = prop;

  return (
    <>
      <div className={`btn-nav btn-nav-${size} ${orientation} ${className}`} onClick={action}>
        {children}
      </div>
    </>
  );
}
