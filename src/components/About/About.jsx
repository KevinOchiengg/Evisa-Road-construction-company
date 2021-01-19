import React from 'react';
import image from '../../images/Award.jpg';
import './About.css';

const About = () => {
  return (
    <>
      <div className='site-main'>
        <div className='section'>
          <div className='widget-page-title'>
            <div
              className='widget-background'
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className='wrapper-inner'>
              <h5>YOUR PERFECT ESCAPE</h5>
              <h1>About Page</h1>
              <p>
                Nuru Palace Hotels is a luxury hotel company, which has had a
                distinct impact on the global hospitality market for the past
                two decades. Nuru has transformed the way that luxury is defined
                as exemplified by its flagship hotel, Nuru Palace Hotel.
              </p>
              <p>
                Founded on Christian principles and located in a serene,
                relaxed, secure, friendly, alcoholic and tobacco free
                environment, Nakuru CBD. Treat your family, friends, staff and
                people dear to you in this 'FAMILY FRIENDLY' environment that is
                TOBACCO and ALCOHOL free. Let our professional staff serve you
                with dedication and className.
              </p>
               <button  class='btn'>
                LEARN MORE
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
