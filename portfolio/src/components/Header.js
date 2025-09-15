import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="App-header">
    <h1>Emre Özata</h1>
    <nav className="App-nav">
     <Link to="/" className="nav-link">About</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
  </nav>
    </header>
  );
}

export default Header;
