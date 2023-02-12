import SearchInput from "../../components/input/SearchInput"
import { Button } from "../../components/Button/Button"
import { ButtonFilter } from "../../components/Button/ButtonFilter"
import services from '../../utils/services-type.json'
import { ServiceCard } from "../../components/atoms/ServiceCard/ServiceCard"
import { CardCTA } from "../../components/Card/CardCTA"


export default function Home() { 
  const listOfServices = services.services 
  return (
    <>
      <div className=" flex flex-col gap-2 p-2">
        <section className="w-full h-40">
          <div className="w-full h-18 flex justify-between  gap-4 p-4">
            <SearchInput />
            <ButtonFilter
              action={() => { console.log('hola') }}
              size="m"
            />
          </div>
          <div className="w-full h-20  flex justify-between items-center p-4">
            <Button
              label="Create Post"
              action={() => { console.log('hola') }}
              size="m"
              variant="primary"
            />
          </div>
        </section>
        <section className=" grid grid-cols-2  place-items-center gap-y-4 mt-4">
          {
            listOfServices.map((service: any) => (
              <ServiceCard
                service_id={service.service_id}
                service_name={service.service_name}
                image={service.image}
                key={service.service_id}
              />
            ))
                    
          }
        </section>

        <CardCTA
          image={{
            src: '/notification.svg',
            width: 100,
            height: 100,
            alt: 'notification'
                        
          }}
          title={'Notifications'}
          description={'Get notified when someone is interested in your post'}
          action={() => { console.log('hola') }}
          size="m"
          variant="primary"
          className="mt-4"        
        />
      </div>
      <article className="w-full h-24 bg-foreground rounded-lg text-center p-4 opacity-70 mt-4 ">
        <p>Photos of sexual or adult content appear on this website. If you are a minor, leave the site by clicking <a href="" className="text-primary underline">here</a></p>
      </article>
    </>
  )
}