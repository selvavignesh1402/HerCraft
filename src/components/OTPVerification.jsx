import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const sendOtp = async () => {
        try {
            const response = await axios.post('/api/otp/send', null, { params: { email } });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error sending OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('/api/otp/verify', null, { params: { email, otp } });
            setMessage(response.data);
        } catch (error) {
            setMessage('Invalid OTP');
        }
    };

    return (
        <div>
            <h2>OTP Verification</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>
            <br />
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>
            <br />
            <p>{message}</p>
        </div>
    );
};

export default OTPVerification;
