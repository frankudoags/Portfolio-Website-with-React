import React from 'react'
import './contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contacts = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>frankudoags@gmail.com</h5>
            <a href="mailto: frankudoags@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsFillTelephoneFill className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5>Speak With Me</h5>
            <a href="tel:+2349065233174" target="_blank">Call me</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>Reach Me via Whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349065233174" target="_blank" >Message me</a>
          </article>
        </div>
      
      </div>
    </section>
  )
}

export default Contacts