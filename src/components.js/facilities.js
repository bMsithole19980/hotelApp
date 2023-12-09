// Facilities.js

import React from 'react';
import './facilities.css'; // Import your CSS file
import gym from '../images/The-gym.jpg'; // Replace with the actual path to your image

const Facilities = () => {
  return (
    <div className="facilities">
      <h1>ABOUT APPLEDEW</h1>
      <div className="appledew-content">
        <div>
          <p>
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so
            <br /> that we can ensure a unique experience. Luxury hotels offer
            the perfect setting with stunning views for leisure<br /> and our
            modern luxury resort facilities will help you enjoy the best.
          </p>
          <br />
          <p>
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so
            <br /> that we can ensure a unique experience. Luxury hotels offer
            the perfect setting with stunning views for leisure<br /> and our
            modern luxury resort facilities will help you enjoy the best.
          </p>
          <br />
          {/* Add your social media icons here */}
        </div>
        <img className="appledew" src={gym} alt="appledew" />
      </div>
    </div>
  );
};

export default Facilities;
