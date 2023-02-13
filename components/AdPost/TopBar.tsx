import React from "react"
import Menu from "../atoms/menu/menu"
import Image from "next/image"
import PointsButton from "../atoms/Points/points-button"
import Sidebar from "../molecules/SideBar/SideBar"

export default function TopBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="h-20 w-full flex items-center justify-between p-4 bg-foreground">
        <div className=" flex gap-2 ">
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          <Image src="/clasifica2.svg" alt="Picture of the author" width={150} height={40} />
        </div>
        <div className="flex gap-2 ">
          <PointsButton points={20} />
        </div>
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}