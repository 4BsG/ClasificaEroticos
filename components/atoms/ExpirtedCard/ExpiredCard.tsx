import { Button } from "../../Button/Button"
import { ButtonIcon } from "../../Button/ButtonIcon"

interface ExpiredCardProps { 
    image_url: string;
    title: string;
    description: string;
    id: number;
}

export const ExpiredCard = ({
  image_url,
  title,
  description,
}: ExpiredCardProps) => {
  return (
    <article className="grid grid-cols-5 gap-0 rounded-xl bg-foreground">
      <div className="col-span-5 lg:col-span-2 lg:row-span-2 text-center bg-orange-500  rounded-t-lg">
              Expired On: 14 feb, 2022
      </div>
      <div className="col-span-2 lg:row-span-4 flex justify-center items-center  p-2 border-b-1.5">
        <div
          className="w-24 h-24 rounded-lg bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image_url}` }}
        />
      </div>
      <div className="col-span-3 lg:row-span-4 border-b-1.5 flex flex-col gap-2 mt-2 ">
        <h2 className=" text-sm font-bold">
          {title}
        </h2>
        <p className=" text-xs opacity-70">
          {description}
        </p>
      </div>
      <div className="col-span-5 lg:row-span-2 flex justify-around gap-4 p-4">
        <Button
          label="Repost"
          variant="primary"
          size="s"       
          action={() => {console.log('hola')}}        
        />
        <Button
          label="To Edit"
          variant="secondary"
          size="s"
          action={() => {console.log('hola')}}
        />
        <ButtonIcon
          icon="trash"
          size="s"
          label="Delete"
                  
          action={() => { console.log('hola') }}
        />
      </div>
    </article>
  )
}