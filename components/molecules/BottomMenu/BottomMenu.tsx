import Image from 'next/image'
import Router from 'next/router'

const menuItemsObj = [
  {
    id: 1,
    image: '/nav-icons/1.svg',
    link: '/home',
    alt: 'home',
  },
  {
    id: 2,
    image: '/nav-icons/4.svg',
    link: '/payment',
    alt: 'payment',
  },
  {
    id: 3,
    image: '/nav-icons/2.svg',
    link: '/select-service',
    alt: 'profile',
  },
  {
    id: 4,
    image: '/nav-icons/3.svg',
    link: '/settings',
    alt: 'settings',
  },
]

export default function BottomMenu() {
  const router = Router;
  const handleClick = (link: string) => { 
    router.push(link)
  }
  return (
    <nav className="fixed bottom-0 h-20 w-full flex justify-center items-center bg-foreground">
      <ul className="inline-flex w-full  justify-around">
        {menuItemsObj.map((item) => (
          <li key={item.id}>
            <button className="flex flex-col items-center"
              onClick={() => handleClick(item.link)}
            >
              <Image src={item.image} width={28} height={22} alt={item.alt} />
              <span className="text-xs text-color-text">{item.alt}</span>
            </button>
          </li>
        )) }
      </ul>
    </nav>
       
  )
}