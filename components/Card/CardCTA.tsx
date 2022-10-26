import Image from "next/image";
import { CardCTAProps } from ".";
import { ButtonGroup } from "../Button/ButtonGroup";

export const CardCTA: React.FC<CardCTAProps> = (prop) => {
  const {
    children,
    image,
    title,
    descrption,
    className = "",
  } = prop;

  return (
    <>
      <div className={`card-container card-cta ${className}`}>
        <div className="image-container w-full h-[170px] lg:h-[240px]">
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

        <ButtonGroup orientation="vertical" className="max-w-[350px]">
          {children}
        </ButtonGroup>
      </div>
    </>
  );
}
