import React from 'react'
import './Contact.css'
import { SiMinutemailer } from "react-icons/si"
import { AiFillMessage } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nm52jyb', 'template_8jgzip9', form.current, 'RA11D5NllhaYzOxIP')
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <SiMinutemailer className='contact__option-icon' />
              <h4>Email</h4>
              <h5>rummanalirakib11@gmail.com</h5>
              <a href="mailto:rummanalirakib11@gmail.com" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
              <AiFillMessage className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>rummanalirakib11@gmail.com</h5>
              <a href="https://m.me/rumman.rakib" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
              <FaWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>(+1)647-676-7668</h5>
              <a href="https://api.whatsapp.com/send?phone+16476767668" target="__blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder='Your Full Name' required />
           <input type="email" name="email" placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
           <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact