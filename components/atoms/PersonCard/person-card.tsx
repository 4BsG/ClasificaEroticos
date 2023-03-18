import Image from "next/image"

interface PersonCardProps {
  image_url: string;
  title: string;
  description: string;
  location: string;
 }

export default function PersonCard({
  image_url,
  title,
  description,
  location
}: PersonCardProps) {
  return (
    <article className=" w-full h-52 grid grid-cols-6 gap-0 bg-foreground rounded-xl shadow-xl">
      <div className="col-span-2 row-span-3 flex items-center justify-center  md:row-span-6">
        <div className=" h-32 w-24 md:w-full md:h-full rounded-xl bg-no-repeat bg-cover bg-center md:rounded-tr-none  md:rounded-br-none"
          style={{ backgroundImage: `url(${image_url}` }}
        />
      </div>
      <div className="col-span-4 row-span-3 flex flex-col items-center justify-center md:pl-4">
        <div className="h-32 flex flex-col gap-2">
          <h2 className=" text-sm font-semibold tracking-wide ">
            {title}
          </h2>
          <p className="text-color-text text-xs pr-6">
            {description}
          </p>
          <div className="w-full h-5 gap-4 items-center inline-flex ">
            <Image
              src="/icons/gps.svg"
              alt="Picture of the author"
              width={20}
              height={16}
            />
            <p className="text-primary underline">{location}</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-1 flex items-center justify-start pl-4  md:col-span-2">
        <ul className="inline-flex justify-start gap-6 md:gap-2 items-center">
          <span className="opacity-70">Services:</span>
          <li
            className=" pt-2"
          >
            <Image
              src="/video.svg"
              alt="Picture of the author"
              width={30}
              height={40}
            />
          </li>
          <li
            className="pt-2"
          >
            <Image
              src="/photo-camera.svg"
              alt="Picture of the author"
              width={30}
              height={20}
            />
          </li>
        </ul>
      </div>
      <div className=" flex items-center justify-center col-span-2 row-span-1   ">
        <div className="flex items-center gap-4 justify-center">
          <Image
            src="/icons/heart-icon.svg"
            alt="Picture of the author"
            width={30}
            height={20}
          />
          <p className="opacity-70">Like</p>
        </div>
      </div>
    </article>

  )
}