import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='register-container'>
      <form className='form-group'>
        <div className='form-content'>
          <h2>Login to Exclusive Luxury Hotels community</h2>
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' /><br />
          <div className='password-container'>
            <input type={showPassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} placeholder='Enter password' />
            <span className='password-toggle' onClick={handlePasswordToggle}>
              {showPassword ? <i className='fas fa-eye-slash'></i> : <i className='fas fa-eye'></i>}
            </span>
          </div>
          <button>Login</button><br />
          <Link to='/forgortPassword' style={{ color: 'blue' }}>Reset password</Link><br />
          <h3>No Account? <Link to='/Register' style={{ color: 'blue' }}>Sign Up</Link></h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
