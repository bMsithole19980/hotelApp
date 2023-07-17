import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase';
import backgroundImage from '../images/loginBack.jpg';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpForm, setShowSIgnUpForm] = useState(false);
  const navigate = useNavigate();
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUpClick = () => {
    setShowSIgnUpForm(true);
  }

  const register = ()=>{
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert('Registered successfully')
      navigate('/header');
    }).catch((error) => {
      console.log(error.message);

    })
  }


  return (

    <div style={{width:"100%" , position:"relative"}}>
      <img className='backHotel' alt='background' src={backgroundImage}></img>
      <div className='register-container'>
        <div className='form-group'>
          <div className='form-content'>
            <h2>Create an account to<br></br> Exclusive Luxury Hotels<br></br> community</h2>
            <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email'></input><br></br>
            <div className='password-container'>
              <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password'></input><br></br>
              <span className='password-toggle' onClick={handlePasswordToggle}>
                {showPassword ? <i className='fa fa-eye-slash' style={{ color: "black" }}></i> : <i className='fa fa-eye' style={{ color: "black" }}></i>}
              </span>
            </div>

            <button onClick={register} >Sign Up</button><br></br>
            <h4>Already have an account? <Link onClick={handleSignUpClick} to='/' style={{ color: "lightskyblue" }}>Log in</Link></h4>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Register;