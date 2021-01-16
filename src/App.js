import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Footer />
      </>
    </Router>
  );
}

export default App;
