import { ButtonChooseProps } from ".";
import { BsFillStarFill } from "react-icons/bs";

export const ButtonChoose: React.FC<ButtonChooseProps> = (prop) => {
  const {
    type = "ad",
    value,
    price,
    className,
    action
  } = prop;

  return (
    <>
      <button
        onClick={action}
        className={`btn btn-choose ${className}`}
      >
        <span className={type === "credit" ? "text-positive text-[24px] font-semibold" : "text-color-label"}>{value}</span>
        <span className="text-xl leading-none text-color-border">&middot;</span>
        <div className="flex justify-center items-center bg-primary w-[17px] h-[17px] rounded-full">
          <BsFillStarFill className="w-[11px] text-foreground" />
        </div>
        {`${price} Points`}
      </button>
    </>
  );
}
