import React from 'react'
import './footer.css'
import {FiMail} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
 
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Harmeet</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <li><a href="#">Home</a></li> */}
      </ul>

      <div className="footer__socials">
        <a href="mailto:harmeetchahal9891@gmail.com" target='_blank'><FiMail/></a>
        <a href="https://github.com/Harmeet135" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/harmeetsingh4/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Harmeet Singh. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer