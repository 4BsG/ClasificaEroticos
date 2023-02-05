import Image from 'next/image'

export const MobileBackground = () => (
  <div className="h-full w-full flex justify-center items-center">
    <div className="h-2/4 w-full flex justify-center bg-dark">
      <Image
        src="/clasifica2.svg"
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </div>
  </div>
)