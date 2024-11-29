import React from 'react'
import './About.css'
import Myself from '../../assets/rumman_profile.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={Myself} alt="About Me"/>

            </div>
        </div>

        <div className='about__content'>
         <div className='d-flex'>
            <div className="about__cards">
               <article className='about__card'>  
                  <div className='d-flex'>
                  <div>
                     <h5>Graduate Research Assistant</h5>
                     <small className='font_size_0_7'>University of Windsor, Windsor, Canada</small>
                  </div>
                  <h5 className='time__period'>May 2021 - Present</h5>
                  </div>
               </article>
            </div>
         </div>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About