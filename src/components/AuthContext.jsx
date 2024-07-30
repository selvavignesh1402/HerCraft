import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Invalid email or password');
        }
    };

    const register = (name, email, password) => {
        // console.log('Registered with:', name, email, password);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
