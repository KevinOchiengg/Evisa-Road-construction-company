import React, { useState, useRef, useEffect } from 'react';
import { links } from './data';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navToggle = () => setShowLinks(!showLinks);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1>EVISA</h1>

          <div className='burger-wrapper'>
            <button className={showLinks ? 'open' : ''} onClick={navToggle}>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </button>
          </div>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, path, text } = link;
              return (
                <li key={id}>
                  <Link
                    className='link'
                    to={path}
                    smooth={true}
                    onClick={navToggle}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
