import Image from "next/image"

export const ImagesVerification = () => { 
  return (
    <div className="p-4 flex flex-col gap-4 mb-40 md:p-8">
      <h2>Select Verification Method</h2>
      <div className="grid grid-cols-2 gap-4">
        <article className="w-40 h-40 md:w-full md:h-60 flex flex-col justify-center bg-foreground text-center gap-2 rounded-xl">
          <Image
            src="/photo-camera.svg"
            alt="Picture of the author"
            width={60}
            height={80}
          />
          <p className=" text-lg text-color-text">By Picture</p>
        </article>
        <article className="w-40 h-40 md:w-full md:h-60 flex flex-col justify-center bg-foreground text-center gap-2 rounded-xl">
          <Image
            src="/video.svg"
            alt="Picture of the author"
            width={40}
            height={70}
          />
          <p className=" text-lg text-color-text">By Video</p>
        </article>
      </div>
    </div>
  )
}