import CheckInput from "../../components/input/CheckInput"
import { Button } from "../../components/Button/Button"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

export default function DeleteAccount() { 
  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <h2 className=" text-lg font-bold">Delete Account</h2>
        <p className="opacity-70">Remember, when you delete your account, all ads related to your email Anyone@gmail.com will be removed</p>
        <div className="flex gap-2">
          <CheckInput />
          <p className=" text-xs text-color-text">i confirm that i want to delete my account and i undestand that my ads will be removed</p>
        </div>
        <Button
          label="Delete Account"
          variant="primary"
          action={() => {
            console.log('Delete')
          }} />
      </section>
      <Advertisement />
    </>
  )
}