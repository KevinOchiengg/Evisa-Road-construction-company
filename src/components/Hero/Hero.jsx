import React, { useEffect, useState } from 'react';
import './Hero.css';
import { sliderData } from './heroData';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Hero = () => {
  const [slider, setSlider] = useState(sliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className='section'>
      <div className='carousel-container'>
        {sliderData.map((slider, sliderIndex) => {
          const { id, title, image } = slider;
          let position = 'nextSlide';
          if (sliderIndex === index) {
            position = 'activeSlide';
          }

          if (
            sliderIndex === index - 1 ||
            (index === 0 && sliderIndex === slider.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article
              id='slider-item'
              className={position}
              style={{ backgroundImage: `url(${image})` }}
              key={id}
            >
              <div className='wrapper'>
                <div className='item-inner'>
                  <h5>WELCOME TO EVISA</h5>
                  <h1>{title}</h1>
                </div>
              </div>

              <button  class='btn'>
                BOOK APPOINTMENT
              </button>

              <div
                className='nextbtn sliderbtn'
                onClick={() => setIndex(index + 1)}
              >
                <FiChevronRight />
              </div>
              <div
                className='prevbtn sliderbtn'
                onClick={() => setIndex(index - 1)}
              >
                <FiChevronLeft />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
