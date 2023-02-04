import { useState } from 'react';
import Step from './Step';

function Stepper() {
  // const steps = ['info', 'postAD', 'confirmPost', 'publish'];
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="bg-background flex justify-between">
        {steps.map((step, i) => (
          <Step
            key={i}
            step={step}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            i={i}
            complete={complete}
          />
        ))}
      </div>
      <div className="bg-foreground flex justify-center px-6">
        <button
          className="btn btn-secondary"
          onClick={() => {
            currentStep > 1 && setCurrentStep(prev => prev - 1);
          }}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep(prev => prev + 1);
          }}
        >
          {currentStep === steps.length ? 'Publish' : 'Next'}
        </button>
      </div>
    </>
  );
}

export default Stepper;
