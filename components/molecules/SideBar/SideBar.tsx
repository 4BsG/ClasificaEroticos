import React from 'react';
import { ButtonWalletUserPoints } from '../../Button/ButtonWalletUserPoints';
import icons from '../../../utils/dashboard-icons.json'
import Image from 'next/image';

interface Props { 
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  isOpen,
  setIsOpen
}: Props) => {
  const listOfIcons = icons.sidenav_icons
  
  const mapListOfIcons = listOfIcons.map((icon) => (
    <li key={icon.id} className='w-full h-8 flex justify-start items-center gap-4 pl-6 md:h-10 md:pl-24 hover:bg-primary-off hover:text-primary'>
      <Image width={20} height={20} src={icon.icon_url} alt={icon.title} />
      <p className=' opacity-70'>{icon.title}</p>
    </li>
  ))
    
  return (
    <>
      {
        isOpen ? (
          <div className='fixed inset-0 z-10 overflow-auto'>
            <div className='w-full h-screen bg-black bg-opacity-75' onClick={() => setIsOpen(false)}>
              <nav className='w-3/4 h-screen md:max-w-sm fixed z-20  bg-foreground'>
                <section className='flex flex-col justify-center items-center gap-2 mt-4 mb-4'>
                  <div className='rounded-full w-24  h-24 flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(/img/first-model.png)` }}>
                  </div>
                  <h2>Anna William</h2>
                  <ButtonWalletUserPoints points={20} action={() => console.log('hola') } />
                </section>
                <section className='w-full h-full flex flex-col gap-2'>
                  {mapListOfIcons}
                </section>
              </nav>              
            </div>
          </div>
        ) : null
      }
    </>

  );
};

export default Sidebar;
