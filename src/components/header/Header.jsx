import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rumman Ali</h1>
        <h5 className='text-light'>Full Stack Software Developer</h5>
        <CTA />
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header