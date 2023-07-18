import React from 'react'
import { Link } from 'react-router-dom';
function SuccessReserved() {
    return (
        <div>
            <div className='page-layout'>
                <div className='icon'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                id="checkmark"
                style={{width:"170px" ,height:"170px" ,fill:"orange"}}
                ><g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0"></rect><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"></path><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"></path></g></g></svg>
                    
                </div>
                <div className='desc'>
                <h3>Your room has been reserved</h3>

                </div>
                
                <div className='btn-sucessfil'>
                    <button className='home'><Link to='/header' style={{ color: "white", textDecoration:"none" }} >BACK HOME</Link></button>

                </div>
            </div>
        </div>
    )
}

export default SuccessReserved;

