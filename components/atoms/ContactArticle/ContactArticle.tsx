import Image from 'next/image'

interface ContactArticleProps { 
    icon: string;
    title: string;
    description: string | number;
}

export default function ContactArticle({
  icon,
  title,
  description,
}: ContactArticleProps) {
  return (
    <article className=" w-40 h-40 shadow-lg flex flex-col justify-center items-center gap-2">
      <Image src={icon} alt="preview" width={50} height={50} />
      <div className="w-full text-center">
        <p className="opacity-70">{title}</p>
        <p>{ description}</p>
      </div>
    </article>
  )
}