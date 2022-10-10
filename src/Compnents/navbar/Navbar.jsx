import React from 'react'
import { BiHome } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav>
      <a href="#"> <BiHome size={30} /></a>

      <a href="#about"> <BiHome size={30} /></a>

      <a href="#experience"> <BiHome size={30} /></a>

      <a href="#portfolio"> <BiHome size={30} /></a>

      <a href="#contact"> <BiHome size={30} /></a>
    </nav>
  )
}

export default Navbar