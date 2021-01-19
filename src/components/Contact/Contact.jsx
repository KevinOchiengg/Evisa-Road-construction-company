import React from 'react';
import image from '../../images/Award.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <section className='site-main'>
      <div className='section'>
        <div className='widget-page-title'>
          <div
            className='widget-background'
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className='wrapper-inner'>
            <h5>GET IN TOUCH WITH US</h5>
            <h1>Contact Page</h1>
            <p>
              Whether you have a question about feature trials, pricing, need a
              demo or anything else, Our team is ready to attend to all
              questions.
            </p>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='wrapper-inner contact-wrapper'>
          <div className='row'>
            <div className='widget-contact-info'>
              <ul>
                <li>
                  <h5>NURU PALACE HOTEL</h5>
                  <ul>
                    <li>
                      Nuru Palace Hotel OGINGA ODINGA AVENUE, NAKURU, KENYA
                    </li>
                    <li>Phone: +254-722-501 229 Fax: +254-722-501 229</li>
                    <li>
                      <a href='mailto:info@thegrandiumhotel.com'>
                        nurupalace@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>RESERVATION</h5>
                  <ul>
                    <li>Mr. Michael Feldstein - Director of Reservation</li>
                    <li>Phone: +254-722-501 229 Fax: +254-722-501 229</li>
                    <li>
                      <a href='mailto:nurupalace@gmail.com'>
                        nurupalace@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>PUBLIC RELATIONS</h5>
                  <ul>
                    <li>Ms. Marilyn Suttle - Public Relations Manager</li>
                    <li>Phone: +254-722-501 229 Fax: +254-722-501 229</li>
                    <li>
                      <a href='mailto:public.nurupalace@gmail.com'>
                        public.nurupalace@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className='widget-contact-form'>
            <h5>CONTACT FORM</h5>
            <p>
              We are eager to hear from you; please fill in your contact
              information and one of our staff members will contact you shortly.
            </p>
            <div className='data-form'>
              <form
                action='https://warm-sea-20579.herokuapp.com/send'
                id='contact-form'
                method='post'
              >
                <div className='row'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      id='form-name'
                      name='form-name'
                      placeholder='YOUR NAME'
                    />
                  </div>

                  <div className='col-md-6'>
                    <input
                      type='text'
                      id='form-email'
                      name='form-email'
                      placeholder='YOUR EMAIL ADDRESS'
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      id='form-phone'
                      name='form-phone'
                      placeholder='YOUR PHONE'
                    />
                  </div>
                  <div className='col-md-12'>
                    <textarea
                      cols='6'
                      rows='8'
                      id='form-message'
                      name='form-message'
                      placeholder='YOUR MESSAGE'
                    ></textarea>
                  </div>
                  <div className='col-md-6'>
                    <p className='note'>
                      * Please fill in all of the required fields
                    </p>
                  </div>
                  <div className='col-md-6 align-right'>
                    <input type='submit' value='SEND FORM' className='btn' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
