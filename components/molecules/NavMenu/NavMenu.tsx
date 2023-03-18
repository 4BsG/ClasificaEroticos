import React from 'react';
import Image from 'next/image';

interface ButtonMenuProps { 
  image: string;
}

const menuItems = ['/nav-icons/1.svg','/nav-icons/4.svg','/nav-icons/2.svg','/nav-icons/3.svg']

const ButtonMenu = ({image}:ButtonMenuProps) => { 
  return (
    <div className='rounded-full flex justify-center items-center w-14 h-14 bg-button-nav hover:bg-primary'>
      <Image src={image} width={28} height={22} alt="menu button"/>
    </div>
  )
}

export const NavMenu = () => { 
  return (
    <section className='w-96 flex justify-between'>
      {menuItems.map((item, index) => <ButtonMenu key={index} image={item} />)}
    </section>
  )
}