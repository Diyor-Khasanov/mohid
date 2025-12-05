import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'
import About from './components/About'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <About />
    </React.Fragment>
  )
}

export default App