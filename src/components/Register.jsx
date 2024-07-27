import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Register.css';
import signupimg from './img6.png'; 
import google from './google.png'
import NavBar from './Navbar';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!agree) {
    //   alert('You must agree to the terms and conditions');
    //   return;
    // }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    register(name, email, password);
    navigate('*');
  };

  return (
    <div>
      <NavBar/>
      <br/>
      <br/>
      <br/>
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <div className="social-buttons">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-group1">
            <input
            type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
              />
              <label htmlFor="agree">I've read and agree with terms of service</label>
              </div> */}
        <br/>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        {/* <br/> */}
          <div className='or'>or</div>
        <button className="social-button google">
            <img src={google} alt="Google logo" className="google-icon" />
            Continue with Google
          </button>
        </div>
        <p className='already'>Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
      <div className="illustration1">
        <img src={signupimg} alt="Register Illustration" />
      </div>
    </div>
              </div>
  );
}

export default Register;
