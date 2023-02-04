import Image from "next/image";
import { CardServicesProps } from ".";

export const CardServices: React.FC<CardServicesProps> = (prop) => {
  const {
    image,
    tags,
    className = "",
    action,
  } = prop;

  return (
    <>
      <div
        className={`card-container card-services ${className}`}
        onClick={action}
      >
        <div className="image-container w-full h-[90px] lg:h-[150px]">
          <Image
            src={image.src}
            alt="service"
            height={image.width}
            width={image.height}
            layout="fill"
          />
        </div>

        <ul className="hidden lg:flex flex-wrap gap-x-4 gap-y-3 w-full border-t-2 pt-8 mt-8 border-color-border">
          {tags.map( tag => (
            <li key={tag} className="inline-block underline underline-offset-2 text-color-label text-[1rem]">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
