import React from 'react'
import Image from 'next/image'

interface Props { 
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({
  isOpen,
  setIsOpen
}: Props) { 
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/icons/burger.svg" alt="Picture of the author" width={25} height={25} />
      </button>
    </>
  )
}