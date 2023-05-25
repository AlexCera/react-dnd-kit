import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useState } from "react"
import User from "./User"


function App() {

  const [people, setPeople] = useState([
    { id: 1, name: "Juan", email: "j**n@mail.com" },
    { id: 10, name: "Jose", email: "j**e@mail.com" },
    { id: 100, name: "Jorge", email: "j***@mail.com" },
    { id: 1000, name: "Jazmin", email: "j***in@mail.com" },
    { id: 10000, name: "Jesus", email: "j***s@mail.com" },
  ])


  /* Manejar evento cuando se suelte un elemento */
  const handleDragEnd = (event) => {
    const { active, over } = event;

    setPeople((people) => {
      const fisrtIndex = people.findIndex((person) => person.id === active.id)
      const finalIndex = people.findIndex((person) => person.id === over.id)

      return arrayMove(people, fisrtIndex, finalIndex)
    })
  }

  return (
    <main className="flex items-center justify-center bg-slate-200">
      <section className="w-2/4">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >

          <h1 className="text-center text-2xl font-bold text-white-500">Contacts</h1>

          <SortableContext
            items={people}
            strategy={verticalListSortingStrategy}
          >
            {
              people.map((person) =>
                (<User key={person.id} user={person} />)
              )
            }
          </SortableContext>

        </DndContext>
      </section>
    </ main >
  )
}

export default App
