import SearchInput from "../../input/SearchInput"
import { ButtonFilter } from "../../Button/ButtonFilter"
import { Button } from "../../Button/Button"

export default function FilterSearch() {
  return (
    <section className="w-full h-40 md:h-20 md:flex md:mt-4 md:mb-4">
      <div className="w-full h-18 flex justify-between  gap-4 p-4">
        <div className="w-full">
          <SearchInput />
        </div>
        <ButtonFilter
          action={() => { console.log('hola') }}
          size="m"
        />
      </div>
      <div className="w-full h-20 md:w-80  flex justify-between items-center p-4">
        <Button
          label="Create Post"
          action={() => { console.log('hola') }}
          size="m"
          variant="primary"
        />
      </div>
    </section>
  )
}