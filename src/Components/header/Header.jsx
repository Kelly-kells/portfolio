import React from 'react'
import CTA from './CTA'
import me from '../../Assets/me-img.JPG'
import style from './header.css'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container animate__animated animate__backInDown">
        <h5>
          Hello! I'm
        </h5>
        <h1>Kelechi Favour</h1>
        <h5 className="text-light">A frontend developer</h5>
        <HeaderSocials />
        <CTA />
        
        
        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll-down '>scroll down</a>

        <div/>
      </div>
    </header>
  )
}

export default Header