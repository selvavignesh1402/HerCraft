// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import './Register.css';
// import signupimg from './img6.png'; 
// import google from './google.png'
// import NavBar from './Navbar';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [agree, setAgree] = useState(false);
//   const navigate = useNavigate();
//   const { register } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // if (!agree) {
//     //   alert('You must agree to the terms and conditions');
//     //   return;
//     // }
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     register(name, email, password);
//     navigate('*');
//   };

//   return (
//     <div>
//       <NavBar/>
//       <br/>
//       <br/>
//       <br/>
//     <div className="register-container">
//       <div className="register-form">
//         <h2>Sign Up</h2>
//         <div className="social-buttons">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           {/* <div className="form-group1">
//             <input
//             type="checkbox"
//               id="agree"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//               required
//               />
//               <label htmlFor="agree">I've read and agree with terms of service</label>
//               </div> */}
//         <br/>
//           <button type="submit" className="submit-button">Sign Up</button>
//         </form>
//         {/* <br/> */}
//           <div className='or'>or</div>
//         <button className="social-button google">
//             <img src={google} alt="Google logo" className="google-icon" />
//             Continue with Google
//           </button>
//         </div>
//         <p className='already'>Already have an account? <Link to="/login">Sign in</Link></p>
//       </div>
//       <div className="illustration1">
//         <img src={signupimg} alt="Register Illustration" />
//       </div>
//     </div>
// </div>
//   );
// }

// export default Register;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useAuth } from './AuthContext';
import signupimg from './img6.png'; 
import NavBar from './Navbar';
import { gapi } from 'gapi-script';

// const clientId = '212963097333-pd12olg4b48egl0gdbdlhb3qa4jc194n.apps.googleusercontent.com';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.load('auth2', () => {
  //       gapi.auth2.init({
  //         client_id: clientId,
  //         scope: 'email',
  //       });
  //     });
  //   };

  //   if (window.gapi) {
  //     initClient();
  //   } else {
  //     window.addEventListener('load', initClient);
  //   }

  //   return () => {
  //     if (window.removeEventListener) {
  //       window.removeEventListener('load', initClient);
  //     }
  //   };
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/userregister/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        console.log('User Registered');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
    register(name, email, password);
  };

  // const handleGoogleLogin = async () => {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   if (auth2) {
  //     auth2.signIn().then(async (googleUser) => {
  //       const idToken = googleUser.getAuthResponse().id_token;
  //       try {
  //         const response = await fetch('http://localhost:8080/api/userregister/google', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ idToken }),
  //         });
  //         if (response.ok) {
  //           console.log('User logged in with Google');
  //           navigate('/home');
  //         } else {
  //           alert('Google login failed');
  //         }
  //       } catch (error) {
  //         console.error('Error:', error);
  //         alert('An error occurred');
  //       }
  //     });
  //   } else {
  //     console.error('Google Auth instance not initialized');
  //     alert('Google Auth instance not initialized. Please try again.');
  //   }
  // };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
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
              <br />
              <button type="submit" className="submit-button">Sign Up</button>
            </form>
            <div className='or'>or</div>
            <button 
            // onClick={handleGoogleLogin} 
            className="social-button google">
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
