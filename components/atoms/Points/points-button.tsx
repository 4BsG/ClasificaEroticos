import Image from "next/image"

interface PointsButtonProps {
    points: number
}

export default function PointsButton({ points }: PointsButtonProps) {
  return (
    <div className=" w-20 h-10 flex justify-center items-center gap-2 bg-primary-off  rounded-xl">
      <Image
        src="/starIcon.svg"
        alt="points"
        width={18}
        height={17}
      />
      <p className=" text-primary font-bold">{points}</p>
    </div>
  )
}