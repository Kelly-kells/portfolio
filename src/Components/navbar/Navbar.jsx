import React from 'react'
import { BiHome } from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookmarkStar} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {MdContactPage} from "react-icons/md"
import styles from './navbar.css'
import { useState } from 'react'

const Navbar = () => {

const[activeNav, setActiveNav]= useState ('#');
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav ('#')}className={activeNav ==='#' ? 'active' : ''}> <BiHome size={20} /></a>

      <a href="#about" onClick={() =>setActiveNav ('#about')} className={activeNav ==='#about' ? 'active' : ''}  > <AiOutlineUser size={20} /></a>

      <a href="#experience" onClick={() =>setActiveNav ('#experience')} className={activeNav ==='#experience' ? 'active' : ''} > <BsBookmarkStar size={20} /></a>

      <a href="#portfolio" onClick={() =>setActiveNav ('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''} > <RiServiceLine size={20} /></a>

      <a href="#contact" onClick={() =>setActiveNav ('#contact')} className={activeNav ==='#contact' ? 'active' : ''} > <MdContactPage size={20} /></a>
    </nav>
  )
}

export default Navbar