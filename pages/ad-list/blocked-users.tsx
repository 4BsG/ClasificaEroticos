import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"
import Image from "next/image"

export default function MyExperience() { 
  return (
    <>
      <section className="p-4 h-screen">
        <h2 className=" text-lg font-bold">Blocked Users</h2>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="/icons/no-block-icon.svg" width={200} height={100} alt="photo no verfied " />
        </div>
      </section>
      <Advertisement />
    </>
  )

}