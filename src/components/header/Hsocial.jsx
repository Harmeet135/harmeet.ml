import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const Hsocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/harmeetsingh4/" target="{_blank}"><BsLinkedin/></a>
        <a href="https://github.com/Harmeet135" target="_blank"><FaGithub/></a>
        <a href="mailto:harmeetchahal9891@gmail.com" target="_blank"><FiMail/></a>
    </div>
  )
}

export default Hsocial