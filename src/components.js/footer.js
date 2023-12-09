import React from "react";
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
