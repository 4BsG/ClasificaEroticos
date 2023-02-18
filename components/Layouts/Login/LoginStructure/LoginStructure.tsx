import TextInput from "../../../input/TextInput"
import PasswordInput from "../../../input/PasswordInput"
import CheckInput from "../../../input/CheckInput"
import { Button } from "../../../Button/Button"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"

type LoginStructureProps = {
  forgotPassword: boolean
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginStructre = ({
  setForgotPassword
}:
LoginStructureProps
) => { 
  const isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <>
      <h2 className="text-xl font-bold md:text-center">Welcome Back</h2>
      {
        isDesktop ? (<p className="text-center text-xs text-color-text">Don´t have a account <a className="text-primary underline">Sign Up</a></p>):null
      }
      <label htmlFor="">{isDesktop ? null : 'Email'} </label>
      {
        isDesktop ? (
          <div>
            <TextInput />
          </div>
        ): <TextInput />
      }
      <label htmlFor="">{isDesktop ? null : 'Password'}</label>
      {
        isDesktop ? (
          <div>
            <PasswordInput />
          </div>
        ): <PasswordInput />
      }
      <article className="w-full  flex justify-end md:justify-start pr-4 md:pr-0 md:pl-2">
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
        className="w-full h-16 md:h-12 flex justify-center items-center "
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