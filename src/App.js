import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
// import Services from './components/services/Services'
import Portfoliol from './components/portfolio/Portfoliol'
// import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Exp />
    {/* <Services /> */}
    < Portfoliol />
    {/* <Testimonial /> */}
    <Contact />
    <Footer />

    </>
  )
}

export default App