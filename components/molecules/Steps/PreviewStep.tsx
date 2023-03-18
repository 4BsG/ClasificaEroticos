import Image from "next/image"
import ContactArticle from "../../atoms/ContactArticle/ContactArticle"
import VideoArticle from "../../atoms/VideoArticle/VideoArticle"

export default function PreviewStep() {
  return (
    <>
      <h2 className=" text-xl font-bold">Preview</h2>
      <section>
        <div className="flex flex-col md:grid grid-cols-2">
          <Image src="/img/model.jpg" alt="preview" width={375} height={433} />  
          <article className="w-full h-56 flex flex-col gap-4 rounded-sm shadow-lg p-2 md:p-4">
            <div className="w-full flex justify-between">
              <p className="opacity-70">18 April, 2022 - ID: 2235533</p>
              <p className=" text-primary">Advance</p>
            </div>
            <h3 className="text-lg  tracking-wider">Hi, i am Camila and i am ready to provide my Services</h3>
            <p className="text-xs opacity-70">is simply dummy text of the     printing and typesettingindustry. Lorem Ipsum has been the
          industry standard dummy text ever since the
          1500s, when an unknown printer took a galley of
              type and scrambled it to make</p>
            <section className="w-full h-56 gap-4 hidden md:flex">
              <ContactArticle
                icon="/icons/whatsapp.png"
                title="Phone"
                description="+1 234 567 890"
              />
              <ContactArticle
                icon="/icons/email-logo.svg"
                title="Email"
                description="Contact"
              />
            </section>
          </article>
          <section className="w-full h-56 flex gap-4 md:hidden">
            <ContactArticle
              icon="/icons/whatsapp.png"
              title="Phone"
              description="+1 234 567 890"
            />
            <ContactArticle
              icon="/icons/email-logo.svg"
              title="Email"
              description="Contact"
            />
          </section>
        </div>


        <p className="text-xl font-bold">Videos</p>
        <section className="grid grid-cols-2 md:grid-cols-4 mt-4 mb-4 place-items-center gap-4 ">
          <VideoArticle/>
          <VideoArticle/>
          <VideoArticle/>
          <VideoArticle />
          <VideoArticle/>
          <VideoArticle/>
          <VideoArticle/>
          <VideoArticle/>
        </section>
        <article className=" w-full h-80 flex justify-center items-center bg-center bg-cover rounded-xl mb-12" style={{ backgroundImage: 'url(/mapcicle.jpg)' }}>
          <Image src="/dot-circle.png" alt="location" width={25} height={25} />
        </article>
        <article className=" w-full  h-36 grid grid-cols-2 grid-rows-2 rounded-lg shadow-xl mb-8 ">
          <div className="border-r-2 border-b-2 flex flex-col justify-center items-center">
            <p className="text-color-text">Times Listed Today</p>
            <p>459</p>
          </div>
          <div className="border-b-2 flex flex-col justify-center items-center">
            <p className="text-color-text">Phone Saw Today</p>
            <p>38</p>
          </div>
          <div className="border-r-2 flex flex-col justify-center items-center">
            <p className="text-color-text">Total Phone Saw</p>
            <p>44369</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-color-text">Total Times Listed</p>
            <p>1126977</p>
          </div>
        </article>
      </section>

    </>
  )
}