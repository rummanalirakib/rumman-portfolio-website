import React from 'react'
import './About.css'
import Myself from '../../assets/rumman_profile.jpg'
import { MdOutlineWork } from "react-icons/md"
import { TbUsersGroup } from "react-icons/tb"
import { GoProjectSymlink } from "react-icons/go";

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
                  <MdOutlineWork className='about-icon'/>
                  <h5>Experience</h5>
                  <small>1.5+ Years Working</small>
               </article>
            </div>

            <div className="about__cards">
               <article className='about__card'>  
                  <TbUsersGroup className='about-icon'/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
               </article>
            </div>

            <div className="about__cards">
               <article className='about__card'>  
                  <GoProjectSymlink className='about-icon'/>
                  <h5>Projects</h5>
                  <small>80+ Completed</small>
               </article>
            </div>
         </div>
            <p>
               Detail-oriented and results-driven Software Engineer and Data Scientist with 1.5+ years of experience in software development, machine learning, and data analysis. Skilled in Python, Java, and web development frameworks, with a 
               focus on leveraging machine learning models to drive insightful decision-making. Proficient in working within Agile environments, collaborating with cross-functional teams to deliver high-quality solutions. Passionate about enhancing 
               software systems, particularly in the context of issue resolution, collaboration networks, and predictive analytics. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About