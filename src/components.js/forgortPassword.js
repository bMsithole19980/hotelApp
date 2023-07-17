import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
function ForgortPassword() {

    const [email, setEmail]=useState('');

    const resetPassword =(()=>{
      sendPasswordResetEmail(auth ,email).then(()=>{
        alert("Check your email for password reset link")

      }).catch((error)=>{
        console.log(error.message);

      })

    })


  return (
    <div className='register-container'>
      <div className='form-group'>
        <div className='form-content'>
          <h2>Enter your email to reset password</h2>
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' /><br />
          <button onClick={resetPassword}>Reset password</button><br />
          <Link to='/' style={{ color: 'blue' }}>Cancel</Link><br />
        
        </div>
      </div>
    </div>
  )
}

export default ForgortPassword;