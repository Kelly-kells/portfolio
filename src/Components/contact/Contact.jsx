import React from 'react'
import { MdEmail } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import styles from "./contact.css"
const Contact = () => {
  return (
    <section id='contact'>
      <h5>
        GET IN TOUCH
      </h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contacts'>
            <MdEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
            <a href="mailto:kellskelechi@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contacts'>
            <BsTwitter className='contact__icon'/>
            <h4>Twitter</h4>
            <h5>KelechiKells</h5>
            <a href="https://twitter.com/KelechiKells" target="_blank">Send a message</a>
          </article>

          <article className='contacts'>
            <RiWhatsappFill className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+2348170272777</h5>
            <a href="https://api.whatsapp.com/send?phone=234702727777" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="">
  <input type="text" name='name' placeholder='Your name' required/>
  <input type="email" name='email'  placeholder='Your email'/>

  <textarea name="message" id="" rows="10" placeholder='Your message'></textarea>
  <button type='submit' className='btn-primary'>send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact