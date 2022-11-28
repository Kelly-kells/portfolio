import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
      <h5>what I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service-head">
            <h3>UI Design</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </article>
      </div>



    </section>
  )
}

export default Services