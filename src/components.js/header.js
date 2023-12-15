import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotel from "../images/hotel.jpg";
import gym from "../images/The-gym.jpg";
import pool from "../images/swimmingPool.jpg";
import spa from "../images/spa.jpg";
import restaurants from "../images/restaurants.jpg";
import laundry from "../images/LAUNDRY.jpg";
import appledew from '../images/appledew.png';
import facebook from '../images/facebook icon 1.png';
import instagram from '../images/instagram icon 1.png'
import telegram from '../images/telegram icon 1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bar from '../images/bar.jpg'
import './header.css';
import Navigation from "./navigation";
import Slider from "react-slick";
import Footer from "./footer";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Display 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Navigation />


      <div className="header-content">
        <Slider {...sliderSettings}>
          <img className="hotel-img" alt="hotel" src={hotel} />
          <img className="hotel-img" alt="gym" src={gym} />
          <img className="hotel-img" alt="pool" src={pool} />
          {/* Add more images as needed */}
        </Slider>

        <div className="left-text">
          <div className="text-name">
            <span style={{ fontWeight: "bold", fontSize: "35px" }}>
              WELCOME TO
            </span>
            <br />
            <span style={{ fontWeight: "bolder", fontSize: "80px" }}>
              AppleDew
            </span>
            <br />
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              HOTEL
            </span>
            <br />
            <span style={{ fontWeight: "lighter", fontSize: "25px" }}>
              Book your stay and enjoy Luxury<br />redifined at the most
              affordable rates
            </span>
          </div>
        </div>

        <div className="facilities">
          <h1>ABOUT APPLEDEW</h1>
          <div className="appledew-content">

            <div>
              <p>
                We want your stay at our lush hotel to be truly unforgettable. Thats
                is why we give special attention to all of your needs so
                <br /> that we can ensure an experience unique. Luxury hotels offer
                the perfect setting with stunning views for leisure<br /> and our
                modern luxury resort facilities will help you enjoy the best.
              </p>
              <br />
              <p>
                We want your stay at our lush hotel to be truly unforgettable. Thats
                is why we give special attention to all of your needs so
                <br /> that we can ensure an experience unique. Luxury hotels offer
                the perfect setting with stunning views for leisure<br /> and our
                modern luxury resort facilities will help you enjoy the best.
              </p>
              <br />
              <img src={facebook} alt='facebook' />
              <img src={instagram} alt='instragram' />
              <img src={telegram} alt='telegram' />
            </div>

            <img className="appledew" src={appledew} alt='appledew' />
          </div>
          <div className="areas">
            <img className="events" src={bar} alt="bar-occations" />
            <div className="overlay">
              <p className="names">Bar and Events</p>
              <br />
              <p> Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
            </div>

          </div>
          {/* <div>
            <img className="facilities-image" alt="gym" src={gym} />
            <h1>THE GYM</h1>
          </div>
        </div>

        <div className="facilities">
          <div>
            <img className="facilities-image" alt="pool" src={pool} />
            <h1>POOLSIDE BAR</h1>
          </div>
        </div>

        <div className="facilities">
          <div>
            <img className="facilities-image" alt="pool" src={spa} />
            <h1>THE SPA</h1>
          </div>
        </div>

        <div className="facilities">
          <div>
            <img className="facilities-image" alt="pool" src={restaurants} />
            <h1>RESTAURANT</h1>
          </div>
        </div>

        <div className="facilities">
          <div>
            <img className="facilities-image" alt="pool" src={laundry} />
            <h1>LAUNDRY</h1>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Header;
