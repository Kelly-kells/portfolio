import React from 'react'
import "./about.css"
import techgirl from "../../Assets/techgirl.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { AiOutlineFolderOpen } from 'react-icons/ai'
import styles from "./about.css"

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get to know
      </h5>
      <h2>Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
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
              <FiUsers />
              <h5>Clients</h5>
              <small>
                freelance/personal projects
              </small>

            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen />
              <h5>Projects</h5>
              <small>
                1+ years experience experience
              </small>

            </article>
          </div>
          <p>Creative Front-End Developer offering 2 years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.

          </p>
          <a href="#contact" className='btn btn-primary'> Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About