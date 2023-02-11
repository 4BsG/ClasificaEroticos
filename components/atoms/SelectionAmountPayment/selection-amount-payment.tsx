import * as React from "react"
import { ButtonChoose } from "../../Button/ButtonChoose"
import { Button } from "../../Button/Button"

type SelectionAmountPaymentProps = {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export default function SelectionAmountPayment({
  setCurrentStep
}: SelectionAmountPaymentProps)  { 

  return (
    <div className="flex flex-col gap-4 justify-between">
      <h2 className=" text-lg font-bold">Select The Amount</h2>
      <p className=" text-color-text text-sm">Please Select for how much you want to purchase the points</p>
      <div className="flex flex-col gap-4 mt-16 mb-8">
        <ButtonChoose
          type="ad"
          value="100"
          price={200}
          action={() => { console.log('hola') }}
        />
        <ButtonChoose
          type="ad"
          value="100"
          price={200}
          action={() => { console.log('hola') }}
        />        <ButtonChoose
          type="ad"
          value="100"
          price={200}
          action={() => { console.log('hola') }}
        />        <ButtonChoose
          type="ad"
          value="100"
          price={200}
          action={() => { console.log('hola') }}
        />
      </div>
      <Button
        label="Next"    
        action={() => { setCurrentStep(3)}}
        size="m"
        variant="primary"
      />
    </div>
  )
}