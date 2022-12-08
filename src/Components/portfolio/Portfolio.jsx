import React from 'react'
import ai from "../../Assets/project-ai.jpg"
import styles from "./portfolio.css"

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>my resent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
          </div>

          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
         </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
         </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
         </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
         </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src={ai} alt="" />
          </div>
          <h3>Project_Ai</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Kelly-kells/Ai-project" className='btn'>
            Github
          </a>
          <a href="https://project-ai.netlify.app" className='btn-primary'>Live Demo</a>
         </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio