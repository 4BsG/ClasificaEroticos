import TextInput from "../../input/TextInput";
import PasswordInput from "../../input/PasswordInput";
import CheckInput from "../../input/CheckInput";
import { Button } from "../../Button/Button";
import { MobileBackground } from "../../MobileBackground/MobileBackground";
import { LoginTab } from "../../LoginTab/LoginTab";

export default function Login() { 
  return (
    <div className="h-screen w-full flex flex-col justify-between ">
      <LoginTab />
      <div className="h-1/2 w-full ">
        <MobileBackground />
      </div>
      <div className="h-1/2 w-full flex flex-col gap-3 justify-between p-4 bg-foreground rounded-t-2xl">
        <h2 className="text-xl font-bold">Welcome Back</h2>
        <label htmlFor="">Email</label>
        <TextInput />
        <label htmlFor="">Password</label>
        <PasswordInput />
        <div className="w-full  flex justify-end pr-4">
          <h5 className="text-primary underline">Forgot Password?</h5>
        </div>      
        <div className="w-full flex gap-2 text-color-text">
          <CheckInput size="m"/>
          <p>Keep me logged in for 60 days</p>
        </div>
        <div 
          className="w-full h-16 flex justify-center items-center "
        >
          <Button
            label="Sign In"
            variant="primary"
            size="xl"
            className="h-full"
            action={() => console.log("Login")}         
          />
        </div>
      </div>
    </div>
  )
}