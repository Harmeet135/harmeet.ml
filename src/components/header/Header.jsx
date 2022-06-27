import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/mee.png'
import Hsocial from './Hsocial'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello , I'm</h5>
      <h1>Harmeet Singh</h1>
      <h5 className="text-light">Front End Developer</h5>
      <CTA />
     <Hsocial />

      <div className="me">
        <img src={me} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Dowm</a>
    </div>
   </header>
  )
}

export default Header