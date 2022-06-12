import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3 className="text-center text-primary mb-2">Front-End Web-Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop User Interface </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build solutions for clients</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build Responsive Websites and Web-Apps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Recreate Figma designs to pixel perfection</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Recreate Figma designs to pixel perfection</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="services__head">
            <h3 className="text-center text-primary mb-2">BlockChain Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop User Interface </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build solutions for clients</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build Responsive Websites and Web-Apps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Recreate Figma designs to pixel perfection</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Recreate Figma designs to pixel perfection</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services