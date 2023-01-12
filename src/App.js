import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BackTop from './Components/BackTop'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import CarDetail from './Pages/CarDetail'
import Checkout from './Pages/Checkout'
import Confirmed from './Pages/Confirmed'
import Home from './Pages/Home'

function App() {
  
  return (
    <BrowserRouter>
    <BackTop />
      <Routes>
        <Route path='/' element={<><Navbar /><Home /></>} />
        <Route path='/car/:id' element={<><Navbar2 /><CarDetail /></>} />
        <Route path='/checkout' element={<><Navbar2 /><Checkout /></>} />
        <Route path='/confirmed' element={<><Navbar2 /><Confirmed /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App