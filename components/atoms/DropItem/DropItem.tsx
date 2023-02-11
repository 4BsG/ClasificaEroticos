import Image from 'next/image'

interface DropItemProps {
    helperImage: string;
    helperText: string;
    title: string;
    subtitle: string;
}

export default function DropItem({ helperImage, helperText, title, subtitle }: DropItemProps) {
  return (
    <div className='flex flex-col gap-2  justify-center '>
      <p className='font-light leading-9 opacity-70'>{title}</p>
      <p className='text-color-text font-light text-sm pb-4'>
        {subtitle}
      </p>
      <div className='w-full flex justify-center items-center'>
        <div className='  w-96  h-52 border-2  border-stone-200 rounded-xl flex justify-center items-center text-color-text'>
          <div className='flex flex-col w-28 h-24 gap-2'>
            <Image src={helperImage} width={75} height={60} alt="hola" />
            <p>{helperText}</p>
          </div>
        </div>
      </div>
    </div>  
  )
}