import React from 'react'
import Stepper from '../../components/Stepper/Stepper'
import PhoneContainer from '../../components/PhoneContainer/PhoneContainer'

import FirstStep from '../../components/molecules/Steps/FirstStep'
import SecondStep from '../../components/molecules/Steps/SecondStep'
import ConfirmStep from '../../components/molecules/Steps/ConfirmStep'
import PreviewStep from '../../components/molecules/Steps/PreviewStep'
import DoneStep from '../../components/molecules/Steps/DoneStep'

import { Button } from '../../components/Button/Button'


export default function AdPost() { 
  const steps = [1, 2, 3, 4]
  const [currentStep, setCurrentStep] = React.useState(1)
  const [complete, setComplete] = React.useState(false)

  return (
    <>
      <div className='w-full h-24 pt-8'>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          complete={complete}
          setComplete={setComplete}
        />
      </div>
      <PhoneContainer>
        <section className='p-4 w-full flex flex-col gap-4'>
          <>
            {
              !complete ? (
                <>
                  {currentStep === 1 && <FirstStep />}
                  {currentStep === 2 && <SecondStep />}
                  {currentStep === 3 && <ConfirmStep />}
                  {currentStep === 4 && <PreviewStep />}
                </>
              ) : (
                <DoneStep />
              )
            }
          </>


          <>
            {
              !complete ? (
                <>
                  <section className='w-full h-12 flex gap-4'>
                    <Button variant='secondary' size="m" action={() => {
                      if (currentStep === 1) {
                        setComplete(false)
                      } else {
                        setCurrentStep(currentStep - 1)
                      }
                    }} label="Cancel" />
                    <Button variant='primary' size="m" action={() => {
                      if (currentStep === steps.length) {
                        setComplete(true)
                      } else {
                        setCurrentStep(currentStep + 1)
                      }
                    }} label="Next" />
                  </section>
                </>
              ) : (
                <section className='w-full h-12 flex justify-center items-center gap-4'>
                  <div className=' w-48 h-24'>
                    <Button variant='primary' size="l" action={() => {
                      setCurrentStep(1)
                      setComplete(false)
                    }
                    } label="Great!" />
                  </div>
                </section>
              )
            }
          </>
        </section>


      </PhoneContainer>
    </>
  )
}