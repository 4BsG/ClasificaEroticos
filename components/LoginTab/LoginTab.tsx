import React from "react"
import { Button } from "../Button/Button"
import Image from "next/image"

interface LoginTabProps { 
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
  forgetPassword: boolean
  setForgetPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginTab = ({
  isLogin,
  setIsLogin,
  forgetPassword,
  setForgetPassword
}: LoginTabProps) => {

  const mainStyle = "h-20 w-full flex items-center justify-between p-2 bg-foreground"
  const forgotStyle = "h-20 w-full flex items-center justify-between p-2"
  
  return (
    <div className={ forgetPassword ? forgotStyle : mainStyle }>
      {
        forgetPassword ? (
          <div className="flex w-1/3 gap-4 p-2">
            <button
              onClick={() => setForgetPassword(false)}
            >
              <Image src="/icons/arrow-back.svg" alt="Picture of the author" width={25} height={25} />
            </button>
            <h2>Go Back</h2>
          </div>
        ): (
          <>
            <div className=" w-1/3">
              <Button
                label={isLogin ? "Sign Up" : "Sign In"}
                variant="secondary"
                size="m"
                action={() => setIsLogin(!isLogin)}         
              />   
            </div>

            <div className="w-1/2 flex gap-2 ">
              <p>Continue As Guest</p>
              <Image src="/icons/arrow.svg" alt="Picture of the author" width={25} height={25} />
            </div>
          </>
        )
      }
    </div>
  )
}