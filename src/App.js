import React from 'react'
import Header from './Compnents/header/Header'
import Navbar from './Compnents/navbar/Navbar'
import About from './Compnents/about/About'
import Experience from './Compnents/experience/Experience'
import Services from './Compnents/services/Services'
import Portfolio from './Compnents/portfolio/Portfolio'
import Contact from './Compnents/portfolio/Portfolio'
import Folder from './Compnents/footer/Footer'

const App = () => {
  return (
    <>
    < Header/>
    <Navbar/>
    <About/>
    <Experience />
    <Services/>
    <Portfolio/>
    <Contact/>
    <Folder/>
  </>
    
  )
}

export default App