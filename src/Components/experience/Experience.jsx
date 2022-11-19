import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai"
import stlyes from "./experience.css"

const experience = () => {
  return (
    <section id='experience'>
      <h5>
        The skills I possess
      </h5>
      <h2>
        My Experience
      </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>React.Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>



          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div><h4>PHP</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='details'>
              <AiFillCheckCircle color="#8ecae6" size="25px" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>



          </div>


        </div>
      </div>
    </section>
  )
}

export default experience