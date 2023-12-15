import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="logo">Your Logo</div>
      <div className={`menu-toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${showMenu ? "active" : ""}`}>
        <li>
          <Link to="/header">Home</Link>
        </li>
        <li>
          <Link to="/facilitiess">Facilities</Link>
        </li>
        <li>
          <Link to="/roomReserv">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
