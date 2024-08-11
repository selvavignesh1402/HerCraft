import React, { useState } from 'react';
import axios from 'axios';

function OtpVerification() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleGenerateOtp = async () => {
        try {
            const response = await axios.post('/api/otp/generate', email, {
                headers: { 'Content-Type': 'application/json' },
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Failed to send OTP');
        }
    };

    const handleValidateOtp = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/otp/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email, // Ensure this is the email entered by the user
            otp: otp,     // Ensure this is the OTP entered by the user
          }),
        });
        
        if (response.ok) {
          const result = await response.text();
          console.log(result);
        } else {
          console.error('Validation failed', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

    return (
        <div>
            <h2>OTP Verification</h2>
            <div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleGenerateOtp}>Generate OTP</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={handleValidateOtp}>Validate OTP</button>
            </div>
            <p>{message}</p>
        </div>
    );
}

export default OtpVerification;
