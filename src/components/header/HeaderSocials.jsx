import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/rumman-ali-5a08b0151/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> </a>
      <a href="https://github.com/rummanalirakib" target="_blank" rel="noopener noreferrer"> <FaGithub/>
      </a>
      <a href="https://leetcode.com/u/rummanalirakib/" target="_blank" rel="noopener noreferrer"> <SiLeetcode/>
      </a>
    </div>
  )
}

export default HeaderSocials