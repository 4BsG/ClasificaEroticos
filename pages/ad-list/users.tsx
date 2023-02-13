import SearchInput from "../../components/input/SearchInput"
import { Button } from "../../components/Button/Button"
import { Advertisement } from "../../components/Layouts/AdList/Advertisement/Advertisement"

const users = [
  {
    id: 1,
    handle: 'John_Doe@',
    ads: 'No Ads',
  },
  {
    id: 2,
    handle: 'John_Doe@',
    ads: 'No Ads',
  },
  {
    id: 3,
    handle: 'John_Doe@',
    ads: 'No Ads',
  },
  {
    id: 4,
    handle: 'John_Doe@',
    ads: 'No Ads',
  },
  {
    id: 5,
    handle: 'John_Doe@',
    ads: 'No Ads',
  },
  {
    id: 6,
    handle: 'John_Doe@',
    ads: 'No Ads',
  }
]


export default function Users() { 
  return (
    <>
      <section className=" p-4 flex flex-col gap-4">
        <h2 className=" text-xl font-bold">Users</h2> 
        <SearchInput />
        <section className="w-full grid grid-cols-2 gap-4">
          {
            users.map((user) => (
              <article key={user.id} className="w-40 h-52 gap-2 bg-foreground rounded-xl p-2 flex flex-col items-center justify-center ">
                <div className=" w-14 h-14 rounded-full bg-no-repeat bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/img/second-model.png')",
                  }}>
                </div>
                <p className="text-sm">{ user.handle}</p>
                <p className=" text-primary text-xs">{user.ads}</p>
                <div className="w-full">
                  <Button
                    label="View Account"
                    variant="primary"
                    action={() => {
                      console.log('Block')
                    }} />
                </div>
              </article>
            ))
            
          }
        </section>
      </section>
      <Advertisement />
    </>
  )
}