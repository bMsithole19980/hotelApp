import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore'; // Import Firestore functions
import hotel from '../images/lognHotel.jpg';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve user role from Firestore
      const q = query(collection(db, 'Users'), where('uid', '==', user.uid)); // Update 'userId' to 'uid'
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        // Check the user's role and navigate accordingly
        if (userData.role === 'admin') {
          navigate('/adminScreen');
        } else {
          navigate('/header');
        }

        alert('Successfully logged in');
      } else {
        console.error('User data not found');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className='login-container'>
        <img src={hotel} alt='hotel' className='side-image' />
        <div className='form-group'>
          <div className='form-content'>
            <h2 style={{ textAlign: 'center' }}>
              Welcome to the Luxury hotel community<br></br>To explore and book Login
            </h2>
            <input
              type='text'
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter your email'
              required
            /><br />
            <div className='password-container'>
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Enter password'
              />
              <span className='password-toggle' onClick={handlePasswordToggle}>
                {showPassword ? <i className='fas fa-eye-slash' style={{ color: 'black' }}></i> : <i className='fas fa-eye'></i>}
              </span>
            </div>
            <button onClick={handleLogin}>Login</button><br />
            <Link to='/forgortPassword' className='reset-link'>Reset password</Link><br />
            <h3>No Account? <Link to='/Register'>Sign Up</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
