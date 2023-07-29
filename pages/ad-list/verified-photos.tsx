import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"
import Image from "next/image"

export default function VerifiedPhotos() { 
  return (
    <>
      <section className="p-4 h-screen">
        <h2 className=" text-lg font-bold">Verified Photos</h2>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="/icons/no-verified.svg" width={200} height={100} alt="photo no verfied " />
        </div>
      </section>
      <Advertisement />
    </>
  )

}