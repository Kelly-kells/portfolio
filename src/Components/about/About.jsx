import React from 'react'
import "./about.css"
import techgirl from "../../Assets/techgirl.png"
import { FaAward } from "react-icons/fa"

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get to know
      </h5>
      <h2>Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me image">
            <img src={techgirl} alt="" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward />
              <h5>Experience</h5>
              <small>
                1+ years experience experience
              </small>

            </article>

            <article className='about__card'>
              <FaAward />
              <h5>Experience</h5>
              <small>
                1+ years experience experience
              </small>

            </article>

            <article className='about__card'>
              <FaAward />
              <h5>Experience</h5>
              <small>
                1+ years experience experience
              </small>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About