import React from 'react'
import room from '../images/Room.jpg'
import { Link } from 'react-router-dom';
function Reserve() {
  return (
    
      <div className='booking-box'>

          <h4 className='book-head' >The people's Brownstone</h4>
          <div className='book-details'>
              <h3>Wifi</h3>
          </div>
          <div className='btns'>
              <button className=' btn-reserve'><Link style={{ color: "white", textDecoration: "none" }} to='/reserve'>Reserve</Link></button>

          </div>
          <div className='features'>
               <h4>Children</h4><b></b>
               <h4>Adults</h4><b></b>
               <h4>Nights</h4><b></b>
          </div>
          <div className='book-room' >
              <img className='booking-pic' alt='book' src={room}></img>

          </div>
      </div>
  )
}

export default Reserve;