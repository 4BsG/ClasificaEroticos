import { Button } from "../../components/Button/Button"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

export default function TransferCredit() { 
  return (
    <>
      <section className="p-4 flex flex-col gap-4">
        <h2 className=" text-xl font-bold" >Transfer Credit</h2>
        <label className="text-xs text-color-text">Enter Credit Amount</label>
        <input className="bg-foreground p-4 w-full h-12 rounded-2xl" type="text" placeholder="0.00" />
        <label className="text-xs text-color-text">Receiver Email</label>
        <input className="bg-foreground p-4 w-full h-12 rounded-2xl" type="text" placeholder="Enter here" />
          
        <Button
          label="Send"
          variant="primary"
          action={() => {
            console.log('Send')
          }} />
      </section>
      <Advertisement />
    </>
  )
}