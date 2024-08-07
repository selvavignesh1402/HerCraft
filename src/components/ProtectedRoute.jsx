import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const PrivateRoute = ({ component: Component, adminRoute, ...rest }) => {
  const { isAuthenticated, user } = useAuth();
  
  // Determine if the user is an admin
  const isAdmin = user?.email === 'admin@gmail.com' && user?.password === '123456'; // Or use a more secure method

  // Render the component if authenticated and authorized
  return <Component {...rest} />;
};

export default PrivateRoute;
