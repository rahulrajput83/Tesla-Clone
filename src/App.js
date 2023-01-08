import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import CarDetail from './Pages/CarDetail'
import Home from './Pages/Home'

const carModel = [
  {
    image: '/ModelY.jpg',
    name: 'Model Y'
  },
  {
    image: '/Model3.jpg',
    name: 'Model 3'
  },
  {
    image: '/ModelS.jpg',
    name: 'Model S'
  },
  {
    image: '/ModelX.jpg',
    name: 'Model X'
  }
]

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<><Navbar /><Home carModel={carModel} /></>} />
        <Route path='/car/:id' element={<><Navbar2 /><CarDetail carModel={carModel} /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App