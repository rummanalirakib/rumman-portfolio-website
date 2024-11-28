import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/rumman.rakib/"><FaFacebookSquare /></a>
        <a href="https://x.com/ali_rumman41442"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <p className='p-text'>@2024 Rumman Ali </p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer