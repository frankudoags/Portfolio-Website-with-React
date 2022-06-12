import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript1, DiReact} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {FaHardHat} from 'react-icons/fa'
import {SiSolidity} from 'react-icons/si'
import {SiEthereum} from 'react-icons/si'
import {SiBinance} from 'react-icons/si'
const Experience = () => {
  return (
    <section id="experience">
      <h5>Tools I work with</h5>
      <h2>Skills and TechStack</h2>
     <div className="container experience__container">
       {/* FRONTEND */}
     <div className="experience__front-end">
        <h3 className="text-center text-primary">Front-End Development</h3>
        <div className="experience__content">
          <article className="experience__details">
         <div>
         <AiFillHtml5  className="icon-tag"/>
          <h4>HTML5</h4>
         </div>
          <small>Experienced</small>
          </article>
          <article className="experience__details">
          <div>
          <DiCss3  className="icon-tag"/>
          <h4>CSS3</h4>
          </div>
          <small>Experienced</small>
          </article>
          <article className="experience__details">
          <div>
            <DiJavascript1  className="icon-tag"/>
          <h4>JavaScript</h4>
          </div>
          <small>Experienced</small>
          </article>
          <article className="experience__details">
          <div>
          <DiReact className="icon-tag"/>
          <h4>React.js</h4>
          </div>
          <small>Intermediate</small>
          </article>
          <article className="experience__details">
          <div>
          <SiTailwindcss className="icon-tag"/>
          <h4>TailwindCSS</h4>
          </div>
          <small>Intermediate</small>
          </article>
        </div>
        {/* BLOCKCHAIN */}
        </div>
        <div className="experience__blockchain">
        <h3 className="text-center text-primary">BlockChain Development</h3>
        <div className="experience__content">
        <article className="experience__details">
         <div>
         <SiSolidity  className="icon-tag"/>
          <h4>Solidity</h4>
         </div>
          <small>Intermediate</small>
          </article>
          <article className="experience__details">
          <div>
          <SiEthereum  className="icon-tag"/>
          <h4>Ethereum</h4>
          </div>
          <small>Experienced</small>
          </article>
          <article className="experience__details">
        <div>
        <FaHardHat  className="icon-tag"/>
          <h4>HardHat</h4>
        </div>
          <small>Experienced</small>
          </article>
          <article className="experience__details">
          <div>
          <SiBinance className="icon-tag"/>
          <h4>Binance Smart Chain</h4>
          </div>
          <small>Experienced</small>
          </article>
        </div>
        </div>
     </div>

    </section>
  )
}

export default Experience