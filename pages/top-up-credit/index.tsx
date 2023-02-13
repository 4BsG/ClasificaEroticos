import { ButtonChoose } from "../../components/Button/ButtonChoose"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

const listOfCredits = [
  {
    id:1,
    price: 40,
    value: '$20',
  },
  {
    id:2,
    price: 80,
    value: '$40',
  },
  {
    id:3,
    price: 80,
    value: '$160',
  },
  {
    id:4,
    price: 160,
    value: '$320',
  },
  {
    id:5,
    price: 320,
    value: '$640',
  },
]

const mapCredits = listOfCredits.map((credit) => { 
  return (
    <ButtonChoose
      key={credit.id}
      type="credit"
      price={credit.price}
      value={credit.value}
      action={() => console.log('clicked')}
    />
  )
})



export default function TopUpCredit() { 
  return (
    <>
      <section className="p-4">
        <h1 className=" font-bold text-xl">Top Up Credit</h1>
        <div className="w-full flex flex-col gap-4 mt-4 mb-4">
          {mapCredits}
        </div>
      </section>
      <Advertisement />
    </>
  )
}