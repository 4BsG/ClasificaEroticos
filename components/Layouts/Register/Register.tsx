import TextInput from "../../input/TextInput"
import PasswordInput from "../../input/PasswordInput"
import SelectPrefix from "../../input/SelectPrefix"
import NumberInput from "../../input/NumberInput"
import { Button } from "../../Button/Button"

export const SignUp = () => (
  <>
    <h2 className="text-xl font-bold">Create Your Account</h2>
    <label htmlFor="">Email</label>
    <TextInput />
    <label htmlFor="">Password</label>
    <PasswordInput />
    <label htmlFor="">Confirm Password</label>
    <PasswordInput />
    <label htmlFor="">Phone Number</label>
    <div className="flex w-full justify-between gap-2">
      <SelectPrefix />
      <NumberInput />
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
  </>
)