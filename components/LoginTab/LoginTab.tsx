import { Button } from "../Button/Button"
import Image from "next/image"

export const LoginTab = () => (
  <div className=" h-20 w-full flex items-center justify-between p-2 bg-foreground">
    <div className=" w-1/3">
      <Button
        label="Sign In"
        variant="secondary"
        size="m"
        action={() => console.log("Login")}         
      />   
    </div>

    <div className="w-1/2 flex gap-2 ">
      <p>Continue As Guest</p>
      <Image src="/icons/arrow.svg" alt="Picture of the author" width={25} height={25} />
    </div>
  </div>
)