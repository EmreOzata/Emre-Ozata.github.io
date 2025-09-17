import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="App-header">
    <h1>Emre Özata</h1>
    <nav className="App-nav">
     <Link to="/" className="nav-link">Om mig</Link>
      <Link to="/projects" className="nav-link">Projekt</Link>
      <Link to="/skills" className="nav-link">Färdigheter</Link>
      <Link to="/contact" className="nav-link">Kontakt</Link>
  </nav>
    </header>
  );
}

export default Header;
