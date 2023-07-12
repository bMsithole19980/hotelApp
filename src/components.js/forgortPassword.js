import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ForgortPassword() {
    const [email, setEmail]=useState('');
  return (
    <div className='register-container'>
      <form className='form-group'>
        <div className='form-content'>
          <h2>Enter your email to reset password</h2>
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' /><br />
          <button>Reset password</button><br />
          <Link style={{ color: 'blue' }}>Cancel</Link><br />
        
        </div>
      </form>
    </div>
  )
}

export default ForgortPassword;