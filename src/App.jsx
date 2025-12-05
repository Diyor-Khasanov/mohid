import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Categories />
      <Products />
    </React.Fragment>
  )
}

export default App