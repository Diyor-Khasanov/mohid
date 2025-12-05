import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App