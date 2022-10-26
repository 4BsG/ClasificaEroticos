import Image from "next/image";
import { CardAccountTypeProps } from ".";
import { ButtonGroup } from "../Button/ButtonGroup";

export const CardAccountType: React.FC<CardAccountTypeProps> = (prop) => {
  const {
    children,
    image,
    title,
    descrption,
    className = "",
  } = prop;

  return (
    <>
      <div className={`card-container card-account-type ${className}`}>
        <div className="image-container w-full h-[200px] lg:h-[240px]">
          <Image
            src={image.src}
            alt={title}
            height={image.width}
            width={image.height}
            layout="fill"
          />
        </div>

        <div className="card-content">
          <h3 className="ts-base ts-title-card">{title}</h3>
          <p className="ts-base">{descrption}</p>
        </div>

        <ButtonGroup orientation="vertical">
          {children}
        </ButtonGroup>
      </div>
    </>
  );
}
