import Image from 'next/image'
export default function Menu() { 
  return (
    <>
      <button>
        <Image src="/icons/burger.svg" alt="Picture of the author" width={25} height={25} />
      </button>
    </>
  )
}