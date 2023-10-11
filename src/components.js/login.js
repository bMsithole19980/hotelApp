import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password).then(() => {
      alert('successfully logged');
      navigate('/header');

    }).catch((error) => {
      console.log(error.mesage);

    })
  }

  return (
    <div style={{width:"100%", position:"relative"}}>
      
      <div className='login-container'>
        <div className='form-group'>
          <div className='form-content'>
            <h2 style={{textAlign:"center"}}>Welcome to Luxury hotel community<br></br>To explore and book Login</h2>
            <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' required/><br />
            <div className='password-container'>
              <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password' />
              <span className='password-toggle' onClick={handlePasswordToggle}>
                {showPassword ? <i className='fas fa-eye-slash' style={{ color: "black" }} ></i> : <i className='fas fa-eye'></i>}
              </span>
            </div>
            <button onClick={handleLogin}>Login</button><br />
            <Link to='/forgortPassword' className='reset-link' >Reset password</Link><br />
            <h3>No Account? <Link to='/Register' >Sign Up</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
