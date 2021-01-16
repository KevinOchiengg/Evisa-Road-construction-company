import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div class='site-footer'>
        <div class='footer-top'>
          <div class='wrapper'>
            <div class='row'>
              <div class='col-lg-6'>
                <h5>SOCIAL MEDIA</h5>
                <h6>FOLLOW THE PALACE</h6>
                <div class='widget-social-icons'>
                  <ul>
                    <li>
                      <a href='#' target='_blank'>
                        <i class='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i class='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i class='fa fa-google-plus'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i class='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-6'>
                <h5>NEWSLETTER</h5>
                <h6>WE LOVE TO SHARE NEW OFFERS AND EXLUSIVE PROMOTIONS</h6>
                <div class='widget-newsletter'>
                  <form>
                    <input
                      type='text'
                      placeholder='ENTER YOUR E-MAIL ADDRESS'
                      required
                    />
                    <button type='submit'>
                      <i class='fa fa-paper-plane'></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>
          <div class='wrapper'>
            <div class='footer-logo'>
              <img src='img/logo1.jpg' alt='Nuru Palace Hotel' />
            </div>
            <div class='footer-copyright'>
              <p>COPYRIGHT © NURU PALACE HOTEL</p>
            </div>
            <div class='footer-contact'>
              <ul>
                <li>
                  <i class='fa fa-map-marker'></i> OGINGA ODINGA AVENUE, NAKURU,
                  KENYA
                </li>
                <li>
                  <i class='fa fa-phone'></i> +254-722-501 229
                </li>
                <li>
                  <a href='mailto:nurupalace@gmail.com'>
                    <i class='fa fa-paper-plane'></i>NURUPALACE@GMAIL.COM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
