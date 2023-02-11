import Menu from "../atoms/menu/menu"
import Image from "next/image"
import PointsButton from "../atoms/Points/points-button"

export default function TopBar() {
  return (
    <div className="h-20 w-full flex items-center justify-between p-4 bg-foreground">
      <div className=" flex gap-2 ">
        <Menu />
        <Image src="/clasifica2.svg" alt="Picture of the author" width={150} height={40} />
      </div>
      <div className="flex gap-2 ">
        <PointsButton points={20} />
      </div>
    </div>
  )
}