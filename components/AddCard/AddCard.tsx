import TextInput from "../input/TextInput"
import { Button } from "../Button/Button"

export default function AddCard() { 
  return (
    <div>
      <label htmlFor="">Card Number</label>
      <TextInput />
      <div className="w-full flex gap-4">
        <div>
          <label>Validity Date</label>
          <TextInput/>
        </div>
        <div>
          <label>CVV</label>
          <TextInput/>
        </div>
      </div>
      <section className="w-full flex justify-end">
        <Button
          label="Confirm"
          action={() => { console.log('hola') }}
          size="m"
          variant="primary"
        />
      </section>
    </div>
  )
}