import React from 'react'
import {MdEmail} from "react-icons/md"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>
        GET IN TOUCH
      </h5>
      <h2>contact mes</h2>
      <div className="container contact__container">
        <div className="contact__options">
    <article className='contacts'>
      <MdEmail/>
    <h4>Email</h4>
    <h5>kellskelechi@gmail.com</h5>
    <a href="mailto: kellskelechi@gmail.com">Send a message</a>
    </article>

    <article className='contacts'>
      <MdEmail/>
    <h4>Email</h4>
    <h5>kellskelechi@gmail.com</h5>
    <a href="mailto: kellskelechi@gmail.com">Send a message</a>
    </article>

    <article className='contacts'>
      <MdEmail/>
    <h4>Email</h4>
    <h5>kellskelechi@gmail.com</h5>
    <a href="mailto: kellskelechi@gmail.com">Send a message</a>
    </article>
        </div>

        <form action=""></form>

      </div>
    </section>
  )
}

export default Contact