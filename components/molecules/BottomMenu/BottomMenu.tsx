import Image from 'next/image'

export default function BottomMenu() {
  return (
    <nav className=" h-20 w-full flex justify-center items-center bg-foreground">
      <ul className="inline-flex w-full  justify-around">
        <li>
          <Image src="/icons/home-w-text.svg" alt="home" width={37} height={46} />
        </li>
        <li>
          <Image src="/icons/dashboard-icon-t.svg" alt="search" width={37} height={46} />
        </li>
        <li>
          <Image src="/icons/users-icon.svg" alt="users" width={37} height={46} />
        </li>
        <li>
          <Image src="/icons/approve-icon.svg" alt="approve" width={37} height={46} />       
        </li>
      </ul>
    </nav>
  )
}