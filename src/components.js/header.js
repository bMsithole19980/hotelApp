import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import hotel from '../images/hotel.jpg'
import gym from '../images/The-gym.jpg';
import pool from '../images/swimmingPool.jpg'
import spa from '../images/spa.jpg'
import restaurants from '../images/restaurants.jpg'
import laundry from '../images/LAUNDRY.jpg'
function Header() {

  
  
  return (
      
    <div>
        <table style={{width:"100%" }}>
            <tr>
                <td>
                        <img className='hotel-img'  alt='hotel' src={hotel}></img>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='nav'>
                        <div className='list'>
                            <ul>
                                <li><Link style={{color:"white"}} >Facilities</Link> </li>
                                <li><Link style={{color:"white"}} to='/roomReserv'>Rooms</Link> </li>
                            </ul>

                        </div>

                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className='left-text'>
                        <div className='text-name'>
                            <span style={{fontWeight:"bold" ,fontSize:"35px"}}>WELCOME TO</span><br></br>
                            <span style={{fontWeight:"bolder" ,fontSize:"80px"}}>LUXURY</span><br></br>
                            <span style={{fontWeight:"bold" ,fontSize:"30px"}}>HOTELS</span><br></br>
                            <span style={{fontWeight:"lighter" ,fontSize:"25px"}}>Book your stay and enjoy Luxury<br></br>redifined at the most affordable rates</span>
                        </div>

                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className=' facilities'>
                        <h1>FACILITIES</h1>
                        <p>We want your stay at our lush hotel to be truly unforgettable. Thats is why we give special attention to all of your nees so<br></br> that we can ensure an experience unique. Luxury hotels offers the perfect setting with stunning views for leisure<br></br> and our modern luxury resort facilities will help you enjoy the best. </p>
                        <img className='facilities-image' alt='gym' src={gym}></img>
                        <h1>THE GYM</h1>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='facilities'>
                        <img  className='facilities-image' alt='pool' src={pool}></img>
                        <h1>POOLSIDE BAR</h1>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className='facilities'>
                        <img  className='facilities-image' alt='pool' src={spa}></img>
                        <h1>THE SPA</h1>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className='facilities'>
                        <img  className='facilities-image' alt='pool' src={restaurants}></img>
                        <h1>RESTAURANT</h1>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className='facilities'>
                        <img  className='facilities-image' alt='pool' src={laundry}></img>
                        <h1>LAUNDRY</h1>
                    </div>

                </td>
            </tr>

        </table>
         
         
   </div>
        
   
      
  );
}

export default Header;

