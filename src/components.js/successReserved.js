import React from 'react'
import { Link } from 'react-router-dom';
function SuccessReserved() {
    return (
        <div>
            <div className='page-layout'>
                <div className='icon'>

                </div>
                <div className='desc'>
                <h4>Your room has been reserved</h4>

                </div>
                
                <div className='btn-sucessfil'>
                    <button className='home'><Link to='/header' style={{ color: "white", textDecoration:"none" }} >BACK HOME</Link></button>

                </div>
            </div>
        </div>
    )
}

export default SuccessReserved;