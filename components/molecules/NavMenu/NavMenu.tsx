import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

interface ButtonMenuProps { 
  image: string;
  link: string;
  alt: string;
}

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



const ButtonMenu = ({ image, link, alt}: ButtonMenuProps) => { 
  const router = Router;
  const handleClick = (link:string) => { 
    router.push(link)
  }
  return (
    <button className='rounded-full flex justify-center items-center w-14 h-14 bg-button-nav hover:bg-primary'
      onClick={() => handleClick(link)}
    >
      <Image src={image} width={28} height={22} alt={alt} />
    </button>
  )
}

export const NavMenu = () => { 
  return (
    <section className='w-96 flex justify-between mr-8'>
      {menuItemsObj.map((item) => <ButtonMenu image={item.image} link={item.link} alt={item.alt} key={item.id} />)}
    </section>
  )
}