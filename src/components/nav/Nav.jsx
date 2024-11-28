import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa"
import { FaUserGraduate } from "react-icons/fa"
import { MdEngineering } from "react-icons/md"
import { GrProjects } from "react-icons/gr";
import { LuMessageCircle } from "react-icons/lu"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdEngineering /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LuMessageCircle /></a>
    </nav>
  )
}

export default Nav