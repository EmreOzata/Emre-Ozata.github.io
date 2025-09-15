import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../css/Footer.css';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-copywright">
        <h3>Designed and Developed by Emre Özata</h3>
        <h3>Copyright © {year}</h3>
      </div>
      <div className="footer-body">
        <div className="footer-icons">
          <a href="https://github.com/EmreOzata" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/emre-%C3%B6zata-54b4222a0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/emreozaata/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
