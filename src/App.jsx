import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Categories />
    </React.Fragment>
  )
}

export default App