import React from 'react'
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./Components/data"


function App() {
  const Cards = data.map(items =>{
    return(
      <Card
      key={items.id}
      items={items}
      />
    )
  })
  return (
    <div>
      <Header />
      {Cards}
    </div>
  )
}

export default App