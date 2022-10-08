import React from 'react'
import CTA from './CTA'
import me from '../../Assets/me-img.JPG'
import style from './header.css'

const Header = () => {
  return (
    <header>
<div className="container header__container">
  <h5>
    Hello! I'm 
  </h5>
  <h1>Kelechi Favour</h1>
  <h5 className="text-light">A frontend developer</h5>
  <CTA/>
  <div className="me">
    <img src={me}alt="me" />
  </div>
</div>
    </header>
  )
}

export default Header