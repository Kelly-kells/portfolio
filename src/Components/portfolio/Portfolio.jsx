import React from 'react'
import ai from "../../Assets/project-ai.jpg"
import fit from "../../Assets/march-fitness.jpg"
import film from "../../Assets/filmore.jpg"
import pot from "../../Assets/afri-pot.jpg"
import creatures from "../../Assets/creatures.jpg"
import styles from "./portfolio.css"



const data = [
  {
    id: 1,
    img: ai,
    title: "Ai-project",
    github: "https://github.com/Kelly-kells/Ai-project",
    demo: "https://project-ai.netlify.app"
  },

  {
    id: 2,
    img: fit,
    title: "Fitness App",
    github: "https://github.com/Kelly-kells/fit-fam",
    demo: "https://marchfitness.netlify.app"
  },

  {
    Id: 3,
    img: film,
    title: "Filmore",
    github: "https://github.com/Kelly-kells/movies",
    demo: "https://filmore.netlify.app"
  },

  {
    Id: 4,
    img: pot,
    title: "African Pot",
    github: "https://github.com/Kelly-kells/African-spot",
    demo: "https://african-pot.netlify.app"
  },

  {
    Id: 5,
    img: creatures,
    title: "Bored witch",
    github: "https://github.com/Kelly-kells/Creatures-nft",
    demo: "https://test-creatures.netlify.app"
  },


]

const Portfolio = () => {


  return (
    <section id='portfolio'>

      <h5>my resent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,img,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>
                Github
              </a>
              <a href={demo} className='btn-primary' target='_blank'>Live Demo</a>
            </div>
  
  
          </article>
          )
        })
       }




      </div>
    </section>
  )
}

export default Portfolio