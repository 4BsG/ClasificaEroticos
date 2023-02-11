import Image from 'next/image'

interface PmCardProps {
    cardNumber: string
    cardType: string
    icon: string
}

export default function PmCard({
  cardNumber,
  cardType,
  icon
}: PmCardProps) {
  return(
    <div className=" w-full h-20 rounded-xl flex items-center justify-between bg-foreground p-4">
      <div>
        <p>{ cardType}</p>
        <p className="text-color-text text-xs">
          {cardNumber}
        </p>
      </div>
      <div>
        <Image src={icon} width={50} height={50}  alt="tipo de carta"/>  
      </div>
    </div>
  )
}