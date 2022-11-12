import React from 'react'
import "./about.css"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { AiOutlineFolderOpen } from 'react-icons/ai'
import styles from "./about.css"

const About = () => {
  return (
    <section id='about'>
      <h2>
        Get to know me
      </h2>
      
      <div className="container container__about">
        <div className="about__me">
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward size="30px" color="#8ecae6"/>
              <h5>Experience</h5>
              <small>
                1+ years experience experience
              </small>

            </article>

            <article className='about__card'>
              <FiUsers size="30px" color="#8ecae6"/>
              <h5>Clients</h5>
              <small>
                freelance/personal projects
              </small>

            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen size="30px" color="#8ecae6" />
              <h5>Projects</h5>
              <small>
                1+ years experience experience
              </small>

            </article>
          </div>
          <div>
          <p>Creative Front-End Developer offering 2 years of experience in providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.</p>
          <a href="#contact" className='btn btn-primary'> Contact me</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About