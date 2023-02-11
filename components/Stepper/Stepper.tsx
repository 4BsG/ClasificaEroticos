import Step from './Step';

interface StepperProps {
  steps: number[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  complete: boolean;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Stepper({
  steps,
  currentStep,
  setCurrentStep,
  complete,
}: StepperProps) {
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
    </>
  );
}

export default Stepper;
