export default function DoneStep() {
  return (
    <>
      <section className="w-full h-96 flex flex-col text-center items-center gap-2">
        <div className=" w-52 h-52 rounded-full"
          style={{
            backgroundImage: "url('/icons/check-done.png')",
          }}> 
        </div>
        <p className=" text-2xl font-bold">All Done!</p>
        <p className=" opacity-70">Your ad will be live shortly, after clearing verification</p>
      </section>
    </>
  )
}