import React from 'react'
import Categories from './components/category/Categories'
import Fashion from './components/Fashion/Fashion'
import Navbar from './components/nav/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Fashion />
      <Categories/>
    </div>
  )
}

export default App