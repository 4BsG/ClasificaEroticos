import React, { PropsWithChildren } from 'react'
import { LoginStructre } from '../Login/LoginStructure/LoginStructure'
import { SignUp } from '../Register/Register'
import { ForgotStructure } from '../../molecules/Forgot/ForgotStructure'

type ControlLoginRegisterProps = {
  isLogin: boolean
  forgetPassword: boolean
  setForgetPassword: React.Dispatch<React.SetStateAction<boolean>>
}

type StructureProps = {
    children: React.ReactNode
}

const Structure = ({ children }: PropsWithChildren<StructureProps>) => (
  <div className="h-auto w-full flex flex-col gap-3 justify-between p-4 bg-foreground rounded-t-2xl">
    {children}
  </div>
)

export default function ControlLoginRegister({
  isLogin,
  forgetPassword,
  setForgetPassword, 
}: ControlLoginRegisterProps) {

  if (isLogin && !forgetPassword) {
    return (
      <Structure>
        <LoginStructre
          forgotPassword={forgetPassword}
          setForgotPassword={setForgetPassword}
        />
      </Structure>
    )
  }

  if (forgetPassword) {
    return (
      <Structure>
        <ForgotStructure />
      </Structure>
    )
  }
  return (
    <Structure>
      <SignUp />
    </Structure> 
  )
} 

