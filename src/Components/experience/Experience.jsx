import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

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
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>CSS</h4>
             <small className='text-light'>Intermediate</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>Javascript</h4>
             <small className='text-light'>intermediate</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>React.Js</h4>
             <small className='text-light'>Experienced</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>Redux</h4>
             <small className='text-light'>Experienced</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>Boostrap</h4>
             <small className='text-light'>Experienced</small>
              </article>

              <article className='details'>
             <AiFillCheckCircle color="blue" size="25px"/>
             <h4>Tailwind</h4>
             <small className='text-light'>Experienced</small>
              </article>

              

            </div>
          </div>
          <div className="experience__backend">

          </div>
      </div>
    </section>
  )
}

export default experience