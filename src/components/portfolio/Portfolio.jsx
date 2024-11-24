import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>

            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/rummanalirakib/Digital-Logic-Design-Simulator" className='btn'>GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio