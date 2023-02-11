import * as React from "react"
import TopBarPayment from "../../components/atoms/TopBarPayment/top-bar-payment"
import PointsRectangle from "../../components/atoms/PointsRectangle/PointsRectangle"
import { Button } from "../../components/Button/Button"

import SelectionAmountPayment from "../../components/atoms/SelectionAmountPayment/selection-amount-payment"
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod"
import AddCard from "../../components/AddCard/AddCard"

export default function Payment() {
  const [currentStep, setCurrentStep] = React.useState(1)
  return (
    <>
      <TopBarPayment
        currentStep={currentStep}
        points={20}
      />
      <div className='w-full h-24 pt-8 p-4'>
        {currentStep === 1 && (      <section className="p-4 flex flex-col justify-between items-center">

          <PointsRectangle />

          <p className=" text-primary under">Check History</p>

          <Button
            label="Continue"
            action={() => { setCurrentStep(2) }}
            size="m"
            variant="primary"
          />
        </section>)}

        {currentStep === 2 && <SelectionAmountPayment setCurrentStep={setCurrentStep} />}
        
        {currentStep === 3 && <PaymentMethod
          setCurrentStep={setCurrentStep}
        />}
        {currentStep === 4 && <AddCard />}
      </div>
    </>
  )
}