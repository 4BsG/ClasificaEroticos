import { Button } from "../../components/Button/Button"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

export default function ChangePassword() { 
  return (
    <>
      <section className="p-4 flex flex-col gap-4">
        <h2 className=" text-xl font-bold">Change Password</h2>
        <label className="text-xs text-color-text">Old Password</label>
        <input className="bg-foreground p-4 w-full h-12 rounded-2xl" type="text" placeholder="Enter here" />
        <label className="text-xs text-color-text">New Password</label>
        <input className="bg-foreground p-4 w-full h-12 rounded-2xl" type="text" placeholder="Enter here" />
        <label className="text-xs text-color-text">Confirm New Password</label>
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