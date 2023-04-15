import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    if (document.getElementById(sectionId)) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
    
  };

  return (
    <nav className="navbar">
      <button className="navbar-button" onClick={() => scrollToSection('home')}>Home</button>
      <button className="navbar-button" onClick={() => scrollToSection('about')}>About</button>
      <button className="navbar-button" onClick={() => scrollToSection('practice')}>Practice</button>
    </nav>
  );
};

export default Navbar;