import persons from '../../../../utils/persons-list.json'
import { ExpiredCard } from "../../../atoms/ExpirtedCard/ExpiredCard"

export const Ads = () => { 
  const listOfPersons = persons.persons
  return (
    <>
      <div className='w-full bg-foreground p-4 text-left mt-4 mb-4'>
        <p className='text-color-text'>
              Price for publishing an as: 1.45 Credit ($0.50) currently has 2 test publications
        </p>
      </div>
      <div className='w-full bg-foreground p-4 text-left mt-4 mb-4'>
        <p className='text-color-text'>
            Clasifica eroticos NEVER EVER contact the adverts by whatsapp or phone, just use the email info@clasificaeroticos.com. If the contact you on our name BLOCK THE PERSON, will create problem for them.
        </p>
      </div>
      <section className="p-4 flex flex-col md:grid grid-cols-3 md:p-8 gap-4">
        {
          listOfPersons.map((person) =>  (
            <ExpiredCard
              key={person.id}
              id={person.id}
              image_url={person.image_url}
              title={person.title}
              description={person.description}
            />
          ))
        }
      </section>
    </>
  )
}