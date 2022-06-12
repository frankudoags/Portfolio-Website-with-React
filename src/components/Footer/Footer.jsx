import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">frankudoags.eth</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://api.whatsapp.com/send?phone=+2349065233174" target="_blank" >
        <BsWhatsapp/>
      </a>
        <a href="https://github.com/frankudoags" target="_blank">
          <AiOutlineGithub/>
        </a>
        <a href="https://twitter.com/Frankudoags1" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Udoagwa Franklin. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer