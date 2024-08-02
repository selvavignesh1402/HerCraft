import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

const Register = () => {
  const navigate = useNavigate();

  // Load the Google API library
  useEffect(() => {
    const initClient = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          clientId: clientId,
          scope: 'email',
        });
      });
    };
    initClient();
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful response and registration logic here
    navigate('/home'); // Redirect or handle login
  };

  const handleError = (error) => {
    console.error('Google login error:', error);
    alert('Login failed. Please try again.');
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onError={handleError}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Register;
