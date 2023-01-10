import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import CarDetail from './Pages/CarDetail'
import Checkout from './Pages/Checkout'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar /><Home /></>} />
        <Route path='/car/:id' element={<><Navbar2 /><CarDetail /></>} />
        <Route path='/checkout' element={<><Navbar2 /><Checkout /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App