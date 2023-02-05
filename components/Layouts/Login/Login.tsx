import React from "react";
import { MobileBackground } from "../../MobileBackground/MobileBackground";
import { LoginTab } from "../../LoginTab/LoginTab";
import ControlLoginRegister from "../LoginRegisterStructure/Structure";

export default function Login() { 
  const [isLogin, setIsLogin] = React.useState(true)
  const [forgetPassword, setForgetPassword] = React.useState(false)

  return (
    <div className="h-screen w-full flex flex-col justify-between ">
      <LoginTab
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        forgetPassword={forgetPassword}
        setForgetPassword={setForgetPassword}
      />
      <div className="h-1/2 w-full ">
        <MobileBackground />
      </div>
      <ControlLoginRegister
        isLogin={isLogin}
        forgetPassword={forgetPassword}
        setForgetPassword={setForgetPassword}
      />
    </div>
  )
}