import TopBar from "../../components/AdPost/TopBar"
import SearchInput from "../../components/input/SearchInput"
import {ButtonFilter} from "../../components/Button/ButtonFilter"
import {Button} from "../../components/Button/Button"
import PersonCard from "../../components/atoms/PersonCard/person-card"
import persons from "../../utils/persons-list.json"

export default function SelectService() {
  const personList = persons.persons
  return(
    <>
      <TopBar />
      <section className="w-full h-40">
        <div className="w-full h-18 flex justify-between  gap-4 p-4">
          <SearchInput />
          <ButtonFilter
            action={() => { console.log('hola') }}
            size="m"
          />
        </div>
        <div className="w-full h-20  flex justify-between items-center p-4">
          <Button
            label="Create Post"
            action={() => { console.log('hola') }}
            size="m"
            variant="primary"
          />
        </div>
        <section className="w-full p-4 flex flex-col gap-6">
          {
            personList.map((person, index) => { 
              return (
                <PersonCard
                  key={index}
                  image_url={person.image_url}
                  title={person.title}
                  description={person.description}
                  location={person.location}
                />
              )
            }
            )
          }
        </section>
      </section>
    </>
  )
}