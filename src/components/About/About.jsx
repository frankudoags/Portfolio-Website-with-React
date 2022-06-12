import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaRestroom} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5 className="text-center">Get to Know</h5>
      <h2 className="text-center">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__card-icon" />
                <h5 className="mb-2">Experience</h5>
                <small>1+ Years Work Experience</small>
              </article>
              <article className="about__card">
              <FaRestroom className="about__card-icon" />
                <h5 className="mb-2">Team Player</h5>
                <small>Comfortable working with a team</small>
              </article>
              <article className="about__card">
              <FiUsers className="about__card-icon" />
                <h5 className="mb-2">Personality</h5>
                <small> Self Driven & Highly Motivated</small>
              </article>
            </div>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos reiciendis quasi fugiat odio! Quos, eius corrupti dolorum maxime placeat magni deserunt iusto eaque numquam quas! Illum vero earum dicta accusamus architecto ipsa voluptates animi, deserunt doloribus. Ullam, eveniet ut.</p>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
      </div>
    </section>
  )
}

export default About