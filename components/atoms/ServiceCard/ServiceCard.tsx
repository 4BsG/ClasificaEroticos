
import Image from "next/image";

interface IService {
    service_id?: number;
    service_name: string;
    image: string;
}

export const ServiceCard = ({ service_name, image }: IService) => (
  <div className="w-40 h-40 flex flex-col justify-center items-center rounded-xl shadow-xl bg-foreground">
    <Image
      src={image}
      alt={service_name}
      width={100}
      height={100}
    />
  </div>
);