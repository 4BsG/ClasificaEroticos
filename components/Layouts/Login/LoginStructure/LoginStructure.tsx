import TextInput from "../../../input/TextInput"
import PasswordInput from "../../../input/PasswordInput"
import CheckInput from "../../../input/CheckInput"
import { Button } from "../../../Button/Button"

type LoginStructureProps = {
  forgotPassword: boolean
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginStructre = ({
  setForgotPassword
}:
LoginStructureProps
) => { 
  return (
    <>
      <h2 className="text-xl font-bold">Welcome Back</h2>
      <label htmlFor="">Email</label>
      <TextInput />
      <label htmlFor="">Password</label>
      <PasswordInput />
      <article className="w-full  flex justify-end pr-4">
        <button
          onClick={() => {
            console.log("Forgot Password")
            setForgotPassword(true)
          }}
        >
          <h5 className="text-primary underline">Forgot Password?</h5>
        </button>
      </article>      
      <article className="w-full flex gap-2 text-color-text">
        <CheckInput size="m"/>
        <p>Keep me logged in for 60 days</p>
      </article>
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
    </>
  )
}