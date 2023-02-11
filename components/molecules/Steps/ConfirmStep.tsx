import Table from "../../Table/Table"
export default function ConfirmStep() {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">Confirm Selection</h2>
      <Table />
          
      <div className="w-full h-48 flex flex-col justify-end  text-center underline  text-primary">
        <p>Don´t have coins? Purchase now</p>
      </div>
    </>
  )
}