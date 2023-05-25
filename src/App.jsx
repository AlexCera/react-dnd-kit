import { DndContext, closestCenter } from "@dnd-kit/core"
import { useState } from "react"

function App() {

  const [people, setPeople] = useState([
    { id: 1, name: "Juan" },
    { id: 10, name: "Jose" },
    { id: 100, name: "Jorge" },
    { id: 1000, name: "Jazmin" },
    { id: 10000, name: "Jesus" },
  ])


  /* Manejar evento cuando se suelte un elemento */
  const handleDragEnd = () => {

  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >

      <h1 className="text-2xl font-bold text-red-500">Contacts</h1>

    </DndContext>
  )
}

export default App
