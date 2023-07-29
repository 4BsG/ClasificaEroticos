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
    <article className="grid grid-cols-5 md:grid-cols-2 gap-0 rounded-xl bg-foreground h-full md:h-60">
      <div className="col-span-5 md:col-span-1 lg:col-span-2 lg:row-span-2 text-center bg-orange-500 rounded-t-lg md:hidden">
        Expired On: 14 feb, 2022
      </div>
      <div className="col-span-2 md:col-span-1 md:row-span-6 flex justify-center items-center p-2 md:p-0  md:h-full">
        <div
          className="w-24 h-24 md:w-full md:h-full rounded-lg bg-no-repeat bg-cover bg-center md:rounded-tr-none  md:rounded-br-none"
          style={{ backgroundImage: `url(${image_url}` }}
        />
      </div>
      <div className="col-span-3 md:col-span-1 lg:row-span-4 border-b border-color-text  flex flex-col gap-2 mt-2 md:p-2">
        <h2 className="text-sm font-bold">
          {title}
        </h2>
        <p className="text-xs opacity-70">
          {description}
        </p>
      </div>
      <div className="col-span-5  md:col-span-1 lg:row-span-2 flex justify-around gap-4 p-4 md:col-start-2">
        <Button
          label="Repost"
          variant="primary"
          size="xs"
          action={() => {
            console.log('hola')
          }}
        />
        <Button
          label="Edit"
          variant="secondary"
          size="xs"
          action={() => {
            console.log('hola')
          }}
        />
        <ButtonIcon
          icon="trash"
          size="s"
          label=""
          action={() => {
            console.log('hola')
          }}
        />
      </div>
    </article>
  )
}

