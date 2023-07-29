import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"
import Image from "next/image"

const listNoAccepted = [
  "Thid party videos",
  "Videos montages with only photos",
  "Video where some type of drug is seen",
  "Video duration of less than 5 seconds",
  "Videos with a format other than AVI, MOV, MP4 adn WMV",
]

const listOfAccepted = [
  "Action add the video to all your ads",
  "Remove the video form all your ads",
  "Delete the video it will remove it from all your ads",
]

const mapListNoAccepted = listNoAccepted.map((item, index) => { 
  return (
    <li key={index} className="text-sm list-disc text-red-500">{item}</li>
  )
})

const mapListOfAccepted = listOfAccepted.map((item, index) => (
  <li key={index} className="text-sm list-disc">{item}</li>
))


export default function MyExperience() { 
  return (
    <>
      <section className="p-4 h-screen flex flex-col gap-4">
        <h2 className="text-lg font-bold">My Experience</h2>
        <div className="flex justify-center items-centerw-full h-56 rounded-2xl border-2">
          <Image src="/icons/video-upload-icon.svg" width={100} height={100} alt="photo no verfied " />
        </div>
        <h3 className="text-red-500">We Do Not Accept</h3>
        <ul className=" flex flex-col pl-4 gap-2">
          {mapListNoAccepted}         
        </ul>
        <h3>Once you have videos uploaded, you can perform the following</h3>
        <ul className=" flex flex-col pl-4 gap-2">
          {mapListOfAccepted}
        </ul>
        <p className="p-2 text-sm opacity-70">You can also add or remove videos from each and separattely from the edits ads option</p>
      </section>
      <Advertisement />
    </>
  )
}