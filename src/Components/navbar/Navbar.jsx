import React from 'react'
import { BiHome } from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookmarkStar} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {MdContactPage} from "react-icons/md"
import styles from './navbar.css'
import { useState } from 'react'

const Navbar = () => {


  return (
    <nav>
      <a href="#"> <BiHome size={20} /></a>

      <a href="#about"> <AiOutlineUser size={20} /></a>

      <a href="#experience"> <BsBookmarkStar size={20} /></a>

      <a href="#portfolio"> <RiServiceLine size={20} /></a>

      <a href="#contact"> <MdContactPage size={20} /></a>
    </nav>
  )
}

export default Navbar