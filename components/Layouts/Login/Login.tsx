import React from "react";
import { MobileBackground } from "../../MobileBackground/MobileBackground";
import { LoginTab } from "../../LoginTab/LoginTab";
import ControlLoginRegister from "../LoginRegisterStructure/Structure";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Login() {
  const [isLogin, setIsLogin] = React.useState(true)
  const [forgetPassword, setForgetPassword] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width:800px)')


  
  return (
    <div className="h-screen w-full flex flex-col justify-between md:grid grid-cols-2 place-items-center"
    >
      {
        !isDesktop && (
          <LoginTab
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            forgetPassword={forgetPassword}
            setForgetPassword={setForgetPassword}
          />
        )
      }

      <div
        className="h-1/2 md:h-screen w-full md:order-last bg-center bg-cover "   
        style={ isDesktop ? { backgroundImage: "url('/background.png')"} : { backgroundColor: "inherit" } }
      >
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