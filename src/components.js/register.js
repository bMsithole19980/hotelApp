import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showSignUpForm, setShowSIgnUpForm]= useState(false);
    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };
   const handleSignUpClick=()=>{
    setShowSIgnUpForm(true);
   }


  return (
    <div className='login-popup'>
      
            <form className='form-group'>
            <div className='form-content'>
                <h2>Create an account to<br></br> Exclusive Luxury Hotels<br></br> community</h2>
                <input type='text' placeholder='Enter your email'></input><br></br>
                <div className='password-container'>
                    <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password'></input><br></br>
                    <span className='password-toggle' onClick={handlePasswordToggle}>
                        {showPassword ? <i className='fa fa-eye-slash' style={{ color: "black" }}></i> : <i className='fa fa-eye' style={{ color: "black" }}></i>}
                    </span>
                </div>
    
                <button>Login</button><br></br>
                <h4>Already have an account? <Link onClick={handleSignUpClick} to='/login'   style={{ color: "lightskyblue" }}>Log in</Link></h4>
            </div>
        </form>

       
    

</div>
  )
}

export default Register;