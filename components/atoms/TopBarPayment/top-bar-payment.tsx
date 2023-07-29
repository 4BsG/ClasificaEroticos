import { ButtonIcon } from "../../Button/ButtonIcon"
import { ButtonWalletUserPoints } from "../../Button/ButtonWalletUserPoints"

interface TopBarPaymentProps { 
  currentStep: number
  points: number
}

function handleTitle(currentStep: number) {
  switch (currentStep) {
  case 1:
    return 'Your Points'
  case 2:
    return 'Purchase Points'
  case 3:
    return 'Payment Method'
  case 4:
    return 'Add A New card'
  case 5:
    return 'Payment Completed'
  default:
    return 'Your Points'
  }
}

export default function TopBarPayment({
  currentStep,
  points
}: TopBarPaymentProps)  { 
  return (
    <nav className=" w-full h-12 flex justify-between items-center bg-foreground p-4">
      <ButtonIcon
        icon="prev"
        size="m"
        action={() => {console.log('hola')} }
      />
      <div>
        {
          handleTitle(currentStep)
        }
      </div>
      <div>
        {
          currentStep === 2 && (
            <ButtonWalletUserPoints
              points={points}
              action={() => { console.log('hola') }}
            />
          )
        }
        {
          currentStep === 3 && (
            <ButtonIcon
              icon="trash"
              size="m"
              action={() => { console.log('hola') }}
            />
          )
        }
      </div>
    </nav>
  )
}