import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/cat1.webp'
 
const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__contact">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years work</small>
          </article>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years work</small>
          </article>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years work</small>
          </article>
        </div> */}

        <p>
        Hiii!  I am harmeet and I am pursuing my bachlor of technology in GD Goenka
                    University(2nd year). 
                   
        </p>
        <p> I enjoy creating things that live on internet . A year ago , I was looking for
                    something fun to do and got into Web Development and have been enjoying it alot ever since . i have
                    done
                    some projects too .</p>

        <a href="#contact">Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About