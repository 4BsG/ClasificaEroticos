
const CreditsList = [
  {
    id: 1,
    value: 30,
    points: 60,
    date: '10 abril 2022'
  },
  {
    id: 2,
    value:60,
    points: 120,
    date: '10 abril 2022'
  },
  {
    id: 3,
    value: 90,
    points: 180,
    date: '10 abril 2022'
  },
  {
    id: 4,
    value: 120,
    points: 240,
    date: '10 abril 2022'
  }
]

const mapCredits = CreditsList.map((credit) => { 
  return (
    <>
      <p className="text-color-text text-sm" key={credit.id}> <a className=" text-red-500">-${credit.value}</a> * {credit.points} Points</p>
      <p className="text-color-text text-sm">{credit.date}</p>
    </>
  )
})

export default function CreditHistory() { 
  return (
    <section className="p-4 flex flex-col gap-4">
      <h2 className=" text-xl font-bold" >Credit History</h2>
          
      <article className=" bg-foreground w-full h-72 rounded-2xl">
        <div className="w-full p-4">
          <p>Purchased Credit</p>       
        </div>
        <div className="w-full grid grid-cols-2 p-2 pl-4">
          <div className=" border-b-2 border-color-text">Credit</div>
          <div className=" border-b-2 border-color-text">Date</div>
          <div className="w-full grid col-span-2 gap-4 mt-4 grid-cols-2">
            {mapCredits}
          </div>
        </div>
      </article>
    </section>
  )

}