import icons from '../../../../utils/dashboard-icons.json'
import { AdListCard } from '../../../atoms/AdListCard/AdListCard'

const mapAdListCard = (adListCard: IAdListCardProps) => (
  <AdListCard
    id={adListCard.id}
    key={adListCard.id}
    icon_url={adListCard.icon_url}
    title={adListCard.title}
    number_of_interactions={adListCard.number_of_interactions}
  />
)


export const Dashboard = () => {
  const adListCardData: IAdListCardProps[] = icons.icons
  
  return (
    <>
      <section className=" w-full grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {adListCardData.map(mapAdListCard)}
      </section>
    </>
  )

}