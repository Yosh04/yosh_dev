import React from 'react';
import { Link } from 'react-scroll';

export function Navbar() {
  return (
    <div className='nav'>
      <header className="nav__header">
        <div className="nav__nameuser"><span className="nav__nameuser__text">Junior</span> Developer</div>
        <nav className="nav__item">
          <ul className="links">
            <li>
              <Link to="home" smooth={true} duration={500} className="link">Inicio</Link>
              <a href="#home" className="link"></a>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="link">Services</Link>
              <a href="#services" className="link"></a>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="link">Skills</Link>
              <a href="#skills" className="link"></a>
            </li>
            <li>
              <Link to="proyects" smooth={true} duration={500} className="link">Proyects</Link>
              <a href="#proyects" className="link"></a>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="link">Contact</Link>
              <a href="#contact" className="link"></a>
            </li>
            <li>
              <Link to="cv" smooth={true} duration={500} className="link">Download-CV</Link>
              <a href="#cv" className="link"></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
