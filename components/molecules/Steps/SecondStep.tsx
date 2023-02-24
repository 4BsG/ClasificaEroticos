import { ButtonChoose } from "../../Button/ButtonChoose"


export default function SecondStep() {
  const subtitleStyle = "font-semibold text-lg"
  return (
    <>
      <h2 className={subtitleStyle}>Choose Add Duration</h2>
      <p className=" opacity-70 text-sm">To public your add please choose the duration of your ad.</p>
      <div className="flex flex-col gap-6 mt-4 mb-8 md:flex-row">
        <ButtonChoose
          type="ad"
          price={20}
          action={() => { }}
          value="1 Month"
        />
        <ButtonChoose
          type="ad"
          price={40}
          action={() => { }}
          value="2 Month"
        />
        <ButtonChoose
          type="ad"
          price={60}
          action={() => { }}
          value="3 Month"
        />
      </div>
      <h2 className={subtitleStyle}>Choose Ad Priority</h2>
      <p className=" opacity-70 text-sm">To public your add please choose the duration of your ad.</p>
      <div className="flex flex-col gap-6 mt-4 mb-16 md:flex-row">
        <ButtonChoose
          type="ad"
          price={20}
          action={() => { }}
          value="1st Priority"
        />
        <ButtonChoose
          type="ad"
          price={15}
          action={() => { }}
          value="2nd Priority"
        />
        <ButtonChoose
          type="ad"
          price={10}
          action={() => { }}
          value="3rd Priority"
        />
      </div>
    </>
  )
}