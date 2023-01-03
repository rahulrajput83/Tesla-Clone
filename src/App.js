import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const carModel = [
  {
    image: 'ModelY.jpg',
    name: 'Model Y'
  },
  {
    image: 'Model3.jpg',
    name: 'Model 3'
  },
  {
    image: 'ModelS.jpg',
    name: 'Model S'
  },
  {
    image: 'ModelX.jpg',
    name: 'Model X'
  }
]

function App() {
  return (
    <>
      <Navbar />
      <Home carModel={carModel} />
    </>
  )
}

export default App