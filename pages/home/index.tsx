import FilterSearch from '../../components/molecules/FilterSearch/FilterSearch'
import services from '../../utils/services-type.json'
import { ServiceCard, DesktopServiceCard } from "../../components/atoms/ServiceCard/ServiceCard"
import { CardCTA } from "../../components/Card/CardCTA"
import Layout from "../../components/Layouts/MyLayout/Layout"

import { useMediaQuery } from '../../hooks/useMediaQuery'


export default function Home() { 
  const listOfServices = services.services 
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <Layout showFooter={true} showNavBar={true}>
      <div className=" flex flex-col gap-2 p-2">
        <FilterSearch />
        <section className=" grid grid-cols-2 md:grid-cols-5 place-items-center gap-y-4 mt-4">
          {
            isDesktop ?
              listOfServices.map((service: any) => (
                <DesktopServiceCard
                  service_id={service.service_id}
                  service_name={service.service_name}
                  image={service.image}
                  key={service.service_id}
                />
              ))
              :
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
      <article className="w-full h-24 flex justify-center items-center md:h-16 bg-foreground rounded-lg text-center p-4 opacity-70 mt-4 ">
        <p>Photos of sexual or adult content appear on this website. If you are a minor, leave the site by clicking <a href="" className="text-primary underline">here</a></p>
      </article>
    </Layout>
  )
}