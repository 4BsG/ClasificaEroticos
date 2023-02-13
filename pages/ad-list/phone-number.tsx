import { Button } from "../../components/Button/Button"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

export default function PhoneNumbers() { 
  return (
    <>
      <section className="p-4 flex flex-col gap-4">
        <h1 className="text-lg font-bold">Main Phone Number</h1>
        <article className="w-full rounded-xl grid grid-cols-2 p-2 bg-foreground mt-4 mb-4">
          <div className=" border-b-1.5 border-color-text">
            <p className="pl-2 pb-2 text-xs">Phone Number</p>
          </div>
          <div className="border-b-1.5 border-color-text">
            <p className="pl-2 pb-2 text-xs">Action</p>
          </div>
          <div className="pt-2 pb-2 pl-2 text-sm opacity-70">32049436368</div>
          <div className="pt-2 pb-2">
            <Button
              label="Remove As Main"
              variant="quiet"
              size="s"
              action={() => console.log('clicked')}
            />
          </div>
        </article>
        <p className=" text-primary underline text-xs text-center">Add New Phone Number</p>
        <h1 className="text-lg font-bold">Main Phone Number</h1>
        <article className="w-full rounded-xl grid grid-cols-2 p-2 bg-foreground mt-4 mb-4">
          <div className=" border-b-1.5 border-color-text">
            <p className="pl-2 pb-2 text-xs">Phone Number</p>
          </div>
          <div className="border-b-1.5 border-color-text">
            <p className="pl-2 pb-2 text-xs">Action</p>
          </div>
          <div className="pt-2 pb-2 pl-2 text-sm opacity-70">32049436368</div>
          <div className="pt-2 pb-2">
            <Button
              label="Remove As Main"
              variant="primary"
              size="s"
              action={() => console.log('clicked')}
            />
          </div>
          <div className="pt-2 pb-2 pl-2 text-sm opacity-70">32049436368</div>
          <div className="pt-2 pb-2">
            <Button
              label="Remove As Main"
              variant="primary"
              size="s"
              action={() => console.log('clicked')}
            />
          </div>
          <div className="pt-2 pb-2 pl-2 text-sm opacity-70">32049436368</div>
          <div className="pt-2 pb-2">
            <Button
              label="Remove As Main"
              variant="primary"
              size="s"
              action={() => console.log('clicked')}
            />
          </div>
        </article>
      </section>
      <Advertisement />
    </>
  )
}