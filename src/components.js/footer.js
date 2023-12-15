// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Your Logo</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/facilities">Facilities</a>
          <a href="/roomReserv">Rooms</a>
          <a href="/faq">FAQ</a> {/* Add FAQ link */}
        </div>
        <div className="footer-social">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
        <div className="footer-details">
          <p>Address: Your Address</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: Your Email</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
