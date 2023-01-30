import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './components/detail/Details'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details' element={<Details/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
    </div>
  )
}

export default App