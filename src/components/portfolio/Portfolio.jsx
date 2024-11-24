import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/DLD Simulator.png'
import IMG2 from '../../assets/DLD Simulator.png'
import IMG3 from '../../assets/DLD Simulator.png'
import IMG4 from '../../assets/DLD Simulator.png'
import IMG5 from '../../assets/DLD Simulator.png'
import IMG6 from '../../assets/DLD Simulator.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Digital Logic Design Simulator',
    github: 'https://github.com/rummanalirakib/Digital-Logic-Design-Simulator'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn'>GitHub</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio