import { ButtonWalletUserPointsProps } from ".";
import { BsFillStarFill } from "react-icons/bs";

export const ButtonWalletUserPoints: React.FC<ButtonWalletUserPointsProps> = (prop) => {
  const {
    points,
    className,
    action
  } = prop;

  return (
    <>
      <button
        onClick={action}
        className={`btn btn-user-points ${className}`}
      >
        <div className="flex justify-center items-center bg-primary w-[17px] h-[17px] rounded-full">
          <BsFillStarFill className="w-[11px] text-foreground" />
        </div>
        {points}
      </button>
    </>
  );
}
