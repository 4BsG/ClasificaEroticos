import Image from "next/image";


export const AdListCard = ({
  id,
  icon_url,
  title,
  number_of_interactions,
}: IAdListCardProps) => (
  <article className=" w-40  h-48 flex flex-col justify-between items-center bg-foreground rounded-xl">
    <div className="mt-8 w-full flex flex-col items-center gap-6 justify-center ">
      <Image
        src={icon_url}
        alt="Picture of the author"
        width={52}
        height={50}
        key={id}
      />
      <p className="opacity-70">{ title}</p>
    </div>
    <div className=" w-full h-1/3 flex justify-center items-center text-2xl font-bold">
      { number_of_interactions > 10 ? number_of_interactions : `0 ${number_of_interactions}`}
    </div>
  </article>
)
