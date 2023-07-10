import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [showLogin, setShowLogin]= useState(false);
    const [showRegister, setShowRegister]= useState(false);
  const [showLoginForm , setShowLoginForm]= useState(false);
    const handleLoginClick=()=>{
        setShowLogin(true);
        setShowRegister(false);
        
    }
     const handleSignUpCLick=()=>{
        setShowLogin(false);
        setShowRegister(true);
    
     }

    const [email , setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [showPassword ,setShowPAssword]= useState(false);
  
    const handePasswordToggle=()=>{
      setShowPAssword(!showPassword);
    }

  return (
      <div className='back-image'>

          <div className='container'>
              <div className='nav-wrapper'>
                  <div className='nav-left'>
                      <div className='nav-name'>Luxury Hotels.</div>
                  </div>
                  <div className='right'>
                      <div className='nav-list'>
                          <ul>
                              <li ><button onClick={handleLoginClick} className='btn-login'>Login</button></li>
                          </ul>
                      </div>
                  </div>

              </div>
              {showLogin && !showRegister && (
                  <div className='login-popup'>
                      <form className='form-group' >
                          <div className='form-content'>
                              <h2>Login to Exclusive Luxury<br></br> Hotels community</h2>
                              <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email'></input><br></br>
                              <div className='password-container'>
                                  <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password'></input><br></br>
                                  <span className='password-toggle' onClick={handePasswordToggle}>
                                      {showPassword ? <i className='fa fa-eye-slash' style={{ color: "black" }}></i> : <i className='fa fa-eye' style={{ color: "black" }}></i>}
                                  </span>
                              </div>

                              <button>Login</button><br></br>
                              <Link style={{ color: "lightskyblue" }} >Reset password</Link><br></br>
                              <h4>No Account ? <Link onClick={handleSignUpCLick}  style={{ color: "lightskyblue" }} >Sign Up</Link></h4>
                          </div>

                      </form>


                  </div>
              )}
              {showRegister && !showLogin && (
                  <div className='register-popup'>
                      <form className='form-group'>
                          <div className='form-content'>
                              <h2>Create an account to<br></br> Exclusive Luxury Hotels<br></br> community</h2>
                              <input type='text' placeholder='Enter your email'></input><br></br>
                              <div className='password-container'>
                                  <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password'></input><br></br>
                                  <span className='password-toggle' onClick={handePasswordToggle}>
                                      {showPassword ? <i className='fa fa-eye-slash' style={{ color: "black" }}></i> : <i className='fa fa-eye' style={{ color: "black" }}></i>}
                                  </span>
                              </div>

                              <button>Login</button><br></br>
                              <h4>Already have an account? <Link    style={{ color: "lightskyblue" }}>Log in</Link></h4>
                          </div>
                      </form>

                  </div>

              )}


          </div>
      </div>
      
  );
}

export default Header;