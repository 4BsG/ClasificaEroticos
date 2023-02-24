import TopBar from "../../components/AdPost/TopBar"
import PersonCard from "../../components/atoms/PersonCard/person-card"
import persons from "../../utils/persons-list.json"
import FilterSearch from "../../components/molecules/FilterSearch/FilterSearch"

export default function SelectService() {
  const personList = persons.persons
  return(
    <>
      <TopBar />
      <section className="w-full h-40">
        <FilterSearch />
        <section className="w-full p-4 flex flex-col gap-6 md:grid grid-cols-3">
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