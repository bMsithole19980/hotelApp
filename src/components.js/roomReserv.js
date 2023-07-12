import React from 'react'
import room from '../images/Room.jpg'
import main from '../images/mainRoom.jpg'
import { Link } from 'react-router-dom'

function RoomReserv() {
  return (
    <div>
        <table style={{width:"100%"}}>
            <tr>
                <td>
                  <img className='room-img' alt='room ' src={main}></img>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='nav'>
                        <div className='list'>
                            <ul>
                                <li><Link  style={{color:"white"}} to='/header'> Facilities</Link></li>
                                <li> Rooms</li>
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
                        <h1>ROOMS AND RATES</h1>
                        <p>Each of our bright, light-flooded rooms come with everything you could possiblt need for a comfortable stay. And yes,<br></br>comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented<br></br>by the rich tones of nature's palette as visible from our room's sea-view windows and terraces</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='booking-space'></div>
                </td>
            </tr>
            <tr>
                <td >
                      <div className='booking-box'>
                          <div className='room-book'>
                              <img className='booking-img' alt='rooom' src={room}></img>
                          </div>
                          <h4>The People's Brownstone</h4>
                        
                      </div>
                    
                </td>
            </tr>
        </table>
    </div>
  )
}

export default RoomReserv;