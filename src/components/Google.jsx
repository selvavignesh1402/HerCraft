import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '212963097333-pd12olg4b48egl0gdbdlhb3qa4jc194n.apps.googleusercontent.com'; // Replace with your actual client ID

const Google = () => {

  useEffect(() => {
    // Load the Google API script
    const initClient = () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: clientId,
          scope: 'email',
        });
      });
    };
    initClient();
  }, []);

  const handleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(
      (googleUser) => {
        console.log('Google User:', googleUser);
        // Handle the Google User object and authenticate with your server if needed
        // You can replace this line with any logic you need after successful login
        alert('Login successful!');
      },
      (error) => {
        console.error('Error during Google login:', error);
        alert('Login failed. Please try again.');
      }
    );
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <button onClick={handleLogin} className="social-button google">
        Continue with Google
      </button>
    </div>
  );
};

export default Google;
