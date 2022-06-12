import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
        <a href={CV} download className="btn">Resume</a>
    </div>
  )
}

export default CTA