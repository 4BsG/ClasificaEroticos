import { step } from '.';

const Step: React.FC<step> = ({
  step,
  currentStep,
  setCurrentStep,
  i,
  complete
}: step) => {
  return (
    <div
      className={`step-item ${currentStep === i + 1 && 'active'} ${
        (i + 1 < currentStep || complete) && 'complete'
      }`}
    >
      <button
        className="step"
        onClick={() => {
          setCurrentStep(step);
        }}
      >
        {step}
      </button>
    </div>
  );
};

export default Step;
