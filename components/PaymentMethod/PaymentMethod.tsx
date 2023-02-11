import * as React from "react"
import { Button } from "../Button/Button"
import PmCard from "./PmCard"

interface PaymentMethodProps { 
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export default function PaymentMethod({
  setCurrentStep
}: PaymentMethodProps) { 
  return (
    <section className="flex flex-col gap-4">
      <PmCard
        cardNumber="**** **** **** 1234"
        cardType="VISA CARD"
        icon="/icons/simple-visa.svg"
      />
      <PmCard
        cardNumber="**** **** **** 1234"
        cardType="MASTER CARD"
        icon="/icons/icon-master.svg"
      />
      <p className=" text-center  text-primary underline">Add New Payment Method</p>
      <Button
        label="Confirm"
        action={() => { setCurrentStep(4)}}
        size="m"
        variant="primary"   
      />
    </section>
  )
}