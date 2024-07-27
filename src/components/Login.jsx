import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import loginimg from './img1.png'
import Navbar from './Navbar';
import './Navbar.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    login();
    navigate('*');
  };

  return (
    <div>
 <Navbar/>
 <br/>
 <br/>
    <div>
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password </label> 
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className='fp'>Forgot password? </p>
        </form>
        <p className='fp'>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
      <div className="illustration">
        <img src={loginimg} alt="Login Illustration" />
      </div>
    </div>
</div>
         </div>
  );
}

export default Login;
