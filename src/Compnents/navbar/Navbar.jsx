import React from 'react'
import { BiHome } from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookmarkStar} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {MdContactPage} from "react-icons/md"

const Navbar = () => {
  return (
    <nav>
      <a href="#"> <BiHome size={30} /></a>

      <a href="#about"> <AiOutlineUser size={25} /></a>

      <a href="#experience"> <BsBookmarkStar size={25} /></a>

      <a href="#portfolio"> <RiServiceLine size={25} /></a>

      <a href="#contact"> <MdContactPage size={25} /></a>
    </nav>
  )
}

export default Navbar