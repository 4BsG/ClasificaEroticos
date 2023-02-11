import SelectPrefix from '../../input/SelectPrefix'
import NumberInput from '../../input/NumberInput'
import TextInput from '../../input/TextInput'
import SelectInput from '../../input/SelectInput'
import CheckInput from '../../input/CheckInput'

import DropItem from '../../atoms/DropItem/DropItem'

const labelStyle = ' opacity-70 text-sm'

export default function FirstStep() { 
  return (
    <>
      <h2 className=' text-lg font-bold pb-4'>Enter Details To Post Ad</h2>
      <div className='w-full h-6 flex justify-between '>
        <h3>Phone Number</h3>
        <div className='w-3/5 flex flex-col'>
          <div className='w-full h-1/2 border-b border-color-text '>
          </div>
        </div>
      </div>
      <p className='text-xs  text-color-text'>Phone Number (This phone number will be public)</p>
      <article className='flex w-full h-12  justify-between'>
        <SelectPrefix />
        <NumberInput />
      </article>
      <div className='w-full text-xs h-5 flex justify-end pr-2 text-primary'>
        <p>Verify Phone Number</p>
      </div>

      <div className='w-full h-6 flex justify-between '>
        <div className='w-1/3'>
          <h3>Location</h3>
        </div>
        <div className='w-2/3 flex flex-col'>
          <div className='w-full h-1/2 border-b border-color-text '>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col gap-4 mb-8'>
        <label className={labelStyle}>Address</label>
        <div>
          <TextInput />
        </div>
        <label htmlFor="" className={labelStyle}>Province</label>
        <SelectInput />
        <label htmlFor="" className={labelStyle}>City</label>
        <SelectInput />
        <label htmlFor="" className={labelStyle}>Country</label>
        <SelectInput />
      </div>

      <div className='w-full h-6 flex justify-between'>
        <div>
          <h3>Post Details</h3>
        </div>
        <div className='w-2/3 flex flex-col'>
          <div className='w-full h-1/2 border-b border-color-text '>
          </div>
        </div>
      </div>

      <label htmlFor="" className={labelStyle}>Title</label>
      <p className='text-color-text'>This is the most important part of your ad make it look catchy.</p>
      <div>
        <TextInput />
      </div>

      <div className='flex flex-col gap-4 mb-8'>
        <label htmlFor="" className={labelStyle}>Category</label>
        <SelectInput />

        <label htmlFor="" className={labelStyle}>Description</label>
        <p className='text-color-text'>Explain your services and mention in clear points to get more clients</p>
        <textarea className=' bg-background rounded-xl'  cols={30} rows={10}/>
        <label htmlFor="" className={labelStyle}>Departures countries</label>
        <div>
          <TextInput />
        </div>
        <label htmlFor="" className={labelStyle}>Age</label>
        <SelectInput />
      </div>

      <div className='w-full h-6 flex justify-between '>
        <h3>Contact</h3>
        <div className='w-2/3 flex flex-col'>
          <div className='w-full h-1/2 border-b border-color-text '>
          </div>
        </div>
      </div>

      <label htmlFor="" className={labelStyle}>Email</label>
      <div>
        <TextInput />
      </div>
      <label htmlFor="" className={labelStyle}>Web</label>
      <div>
        <TextInput />
      </div>

      <p className='text-sm opacity-70'>Choose</p>

      <div className='flex flex-col text-color-text'>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Contact by Email</p>
        </div>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Show phones number on ad</p>
        </div>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Show whats app number on ad</p>
        </div>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Show Location</p>
        </div>
      </div>

      <div>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Ask for Advance payment.</p>
        </div>
        <div className='flex justify-start gap-4'>
          <CheckInput />
          <p>Show your location on ad.</p>
        </div>
      </div>

      <div className='w-full h-6 flex justify-between'>
        <h3>Media</h3>
        <div className='w-2/3 flex flex-col'>
          <div className='w-full h-1/2 border-b border-color-text '>
          </div>
        </div>
      </div>
      <DropItem
        title='Upload Images'
        subtitle='Only upload your own images, not too blur, not too small and not with watermarks'
        helperImage={'/photo-camera.svg'}
        helperText={'Upload Images'}
      />

 
      <DropItem
        title='Upload Video'
        subtitle='Only upload your own images, not too blur, not too small and not with watermarks'
        helperImage={'/video.svg'}
        helperText={'Upload Videos'}
      />

      <div className='flex text-xs text-color-text gap-2 mt-24'>
        <CheckInput />
        <p>I am 18+, i am doing all this on all my consent and i agree to the <a href="" className=' text-primary underline'>Terms & Condition</a> and <a href="" className='text-primary underlinex'>Privacy Policy</a></p>
      </div>
    </>
  )
}