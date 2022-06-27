import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.png'
import Weather from '../../assets/weatherapp.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";




const Portfoliol = () => {
  return (


    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">


        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>Spotify Clone Responsive Web App</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/spotify_clone"  target='_blank' className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>React Responsive Web Page</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>ReactJs</li>
                <li>HTML</li>
                <li>CSSL</li>
                <li>JavaScript</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/React-site" target='_blank'  className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>
      
          </Swiper>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>Pizza buying Cart</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
                {/* <li>JavaScript</li> */}
                <li>TailWind CSS</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/pizza_store" target='_blank' className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>
      
          </Swiper>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG7} alt="" />
            </div>
            <h3>Online Chatting Room Web App</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>HTML</li>
                <li>Ajex</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/Chat-app" target='_blank' className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>
      
          </Swiper>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG8} alt="" />
            </div>
            <h3>Live Weather Web App - To display weather of differnt cities around the World</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>ReactJs</li>
                <li>API</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/liveweatherwebapp" target='_blank'  className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>
      
          </Swiper>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>Responsive Education Web App</h3>

          </SwiperSlide>


          <SwiperSlide className='portfolio__info'>
            <div className="portfolio__info-info">
              <h3>Tech Used</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
              </ul>

              <div className="portfolio__item-cta">
                <a href="https://github.com/Harmeet135/education_website" target='_blank'  className='btn' >Github</a>
              </div>
            </div>
          </SwiperSlide>
      
          </Swiper>

      </div>
    </section>

  )
}

export default Portfoliol