import React from "react"
import TextInput from "../../input/TextInput"
import { Button } from "../../Button/Button"
import Image from "next/image"

type OTPStructureProps = {
  setOtp: React.Dispatch<React.SetStateAction<boolean>>
}

const OtpSquare = () => (
  <div className="w-16 h-16 flex justify-center items-center border-2 border-primary">
    <p className="text-primary">1</p>
  </div>
)

const OTPStructure = ({ setOtp }: OTPStructureProps) => (
  <div
    className="w-full h-full flex flex-col justify-center items-center gap-4"
  >
    <Image src="/img/verification.svg" alt="Picture of the author" width={300} height={200} />
    <h2 className=" text-2xl font-bold">Email Verification</h2>
    <div className="p-4 text-center text-color-text">
      <p>We have sent you an email verifiation code please confirm.</p>
    </div>
    <div className="w-full h-16 flex justify-center items-center gap-2">
      <OtpSquare />
      <OtpSquare />
      <OtpSquare />
      <OtpSquare />
    </div>
    <div className="flex">
      <p className="text-color-text">Expires in: </p>
      <p className="text-primary">00:00</p>
    </div>

    <div
      className="w-full h-16 flex justify-center items-center "
    >
      <Button
        label="Verify"
        variant="primary"
        size="xl"
        className="h-full"
        action={() => setOtp(false)}
      />
    </div>
  </div>
)

export const ForgotStructure = () => {
  const [otp, setOtp] = React.useState<boolean>(false)

  if (otp) return <OTPStructure setOtp={setOtp} />

  return (
    <>
      <h2 className="text-xl font-bold">Forgot Your Password?</h2>
      <p className="text-color-text"> We will send you an email verifications. Code to verify it´s you.</p>
      <label htmlFor="">Email</label>
      <TextInput />
      <div
        className="w-full h-16 flex justify-center items-center "
      >
        <Button
          label="Send OTP"
          variant="primary"
          size="xl"
          className="h-full"
          action={() => setOtp(true)}
        />
      </div>
    </>
  
  )
}