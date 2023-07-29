
import Image from "next/image";

interface IService {
    service_id?: number;
    service_name: string;
    image: string;
}

const citiesList = [ 'Antofagasta', 'Arica', 'Calama', 'Copiapó', 'Iquique', 'La Serena', 'Los Andes', 'Ovalle', 'Punta Arenas', 'Puerto Montt', 'Rancagua', 'San Antonio', 'San Felipe', 'San Fernando', 'San Pedro de Atacama', 'Santiago', 'Valparaíso', 'Viña del Mar', 'Vitacura']


export const ServiceCard = ({ service_name, image }: IService) => (
  <div className="w-40 h-40  flex flex-col justify-center items-center rounded-xl shadow-xl bg-foreground">
    <Image
      src={image}
      alt={service_name}
      width={100}
      height={100}
    />
  </div>
);

export const DesktopServiceCard = ({ service_name, image }: IService) => (
  <div className="w-64 h-96 flex flex-col justify-evenly items-center rounded-xl shadow-xl bg-foreground">
    <Image
      src={image}
      alt={service_name}
      width={100}
      height={100}
    />
    <section className=" h-1/2 w-full flex justify-center">
      <ul className="w-full h-full justify-center flex  flex-wrap  gap-4 list-none p-0 m-0">
        {
          citiesList.map((city, index) => (
            <li key={index} className="text-xs underline text-color-text">{city}</li>
          ))
        }
      </ul>
    </section>
  </div>
)