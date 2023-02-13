import icons from "../../../utils/social-media-list.json"
import Image from "next/image"

export default function Footer() { 
  const listOfIcons = icons.icons
  return (
    <footer className="flex flex-col mt-8 mb-8 bg-foreground rounded-t-xl">
      <section className="w-full h-40  grid grid-cols-2 border-b-1.5 mb-6">
        <article className=" w-full h-full text-center flex flex-col items-center justify-center ">
          <p className="opacity-70">Medium</p>
          <p className="opacity-70">Payment Policy</p>
        </article>
        <article className=" w-full h-full text-center flex flex-col items-center justify-center ">
          <p className="opacity-70">Privacy Policy</p>
          <p className="opacity-70">Terms & Conditions</p>
        </article>
        <article className=" w-full h-full text-center flex flex-col items-center justify-center ">
          <p className="opacity-70">Contact</p>
          <p className="opacity-70">Banner</p>
        </article>
        <article className=" w-full h-full text-center flex flex-col items-center justify-center ">
          <p className="opacity-70">Cookies Policy</p>
          <p className="opacity-70">Term of Use</p>
        </article>


      </section>
      <section className="text-center">
        <h3 className=" text-lg font-bold">Follow US</h3>
        <ul className="inline-flex w-full mt-2 mb-2 justify-center items-center gap-4">
          {
            listOfIcons.map((icon: any) => (
              <li key={icon.id}>
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={30}
                  height={30}
                />
              </li>
            ))
                        
          }
        </ul>
        <p className="p-4 text-sm opacity-70">CONTENT PAGE FOR ADULTS +18 YEARS. ALL ADVERTISERS HAVE ACKNOWLEGDED BEING AT LEAST 18 YEARS OF AGE.</p>
        <p className="p-4 text-sm opacity-70">
                      2021 MAKE WITH ❤️ BY CLASIFICA2EROTICOS - EMAIL: INFO@CLASIFICA2EROTICOS.COM
        </p>
      </section>
    </footer>
    
  )
}