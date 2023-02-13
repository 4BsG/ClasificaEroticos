import * as React from 'react'
import { Dashboard } from '../../components/Layouts/AdList/Dashboard/Dashboard';
import { Ads } from '../../components/Layouts/AdList/Ads/Ads';
import {  Advertisement } from '../../components/Layouts/AdList/Advertisement/Advertisement';
import { ImagesVerification } from '../../components/Layouts/AdList/ImagesVerification/ImagesVerifications';

const options = [{
  id: 1,
  name: 'Dashboard'
}, {
  id: 2,
  name: 'Ads'
}, {
  id: 3,
  name: 'Images'
}]

const mapOptions = (option: { id: number, name: string }, buttonClicked, setButtonClicked, setOption) => (
  <li key={option.id} className={`border-b-2  ${buttonClicked === option.id ? 'border-primary' : null}`} >
    <button
      className={`w-24 h-8 rounded-xl ${buttonClicked === option.id ? 'text-primary' : 'text-color-text'}`}
      onClick={() => {
        setButtonClicked(option.id);
        setOption(option)
      }}
    >{option.name}</button>
  </li>
)



export default function AdList() {
  const [buttonclicked, setButtonClicked] = React.useState(false)
  const [option, setOption] = React.useState(options[0])

  return (
    <>
      <div className="flex flex-col p-2">
        <ul className="w-full h-24 items-center p-8 text-color-text inline-flex justify-between">
          { options.map((option) => mapOptions(option, buttonclicked, setButtonClicked, setOption))}
        </ul>    
      </div>
      {
        option.id === 1 && <Dashboard />
      }
      {
        option.id === 2 && <Ads/>
      }
      {
        option.id === 3 && <ImagesVerification />
      }
      <Advertisement />
    </>
  )
}