import * as React from "react"
import TopBarPayment from "../../components/atoms/TopBarPayment/top-bar-payment"
import PointsRectangle from "../../components/atoms/PointsRectangle/PointsRectangle"
import { Button } from "../../components/Button/Button"

import SelectionAmountPayment from "../../components/atoms/SelectionAmountPayment/selection-amount-payment"
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod"
import AddCard from "../../components/AddCard/AddCard"
import Layout from "../../components/Layouts/MyLayout/Layout"
import { useMediaQuery } from "../../hooks/useMediaQuery"


export default function Payment() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [currentStep, setCurrentStep] = React.useState(1)
  return (
    <Layout showNavBar={true}>
      {
        !isDesktop && <TopBarPayment
          currentStep={currentStep}
          points={20}
        />
      }
      <div className='w-full h-24 pt-8 p-4'>
        {currentStep === 1 && (      <section className="p-4 flex flex-col justify-between items-center">

          <PointsRectangle />

          
          <div className="w-full flex flex-col justify-center mt-4 items-center">
            <Button
              label="Purchase Points"
              action={() => { setCurrentStep(2) }}
              size="m"
              variant="primary"
            />
            <p className="mt-4 underline text-primary under">View More From Same Number</p>
          </div>
        </section>)}

        {currentStep === 2 && <SelectionAmountPayment setCurrentStep={setCurrentStep} />}
        
        {currentStep === 3 && <PaymentMethod
          setCurrentStep={setCurrentStep}
        />}
        {currentStep === 4 && <AddCard />}
      </div>
    </Layout>
  )
}