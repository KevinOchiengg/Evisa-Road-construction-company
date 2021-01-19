import React from 'react'
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import Services from '../../Services/Services';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Testimonial from '../../Testimonial/Testimonial';

const HomePage = () => {
 return (
  <>
     <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonial/>
        <Contact />
        <Footer />
  </>
 )
}

export default HomePage
