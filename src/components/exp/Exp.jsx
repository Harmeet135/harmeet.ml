import React from 'react'
import './exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='exp'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">

            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Reactjs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

         
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

         
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
         
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
         
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


          </div>
        </div>
        <div className="exp__frontend">



          <h3>Some Other Tech</h3>
          <div className="exp__content">

          <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
           
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
           
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icons' />
              <div>  
                <h4>MongoGD</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Exp