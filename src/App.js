import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import HomePage from './components/Pages/HomePage/HomePage';

function App() {
  return (
  

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
           <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
