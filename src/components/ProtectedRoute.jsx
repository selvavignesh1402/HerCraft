// // components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthProvider'; // Adjust the import path if necessary

// const ProtectedRoute = ({ element: Component, adminOnly = false, ...rest }) => {
//   const { user, isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (adminOnly && user?.role !== 'admin') {
//     return <Navigate to="/" />;
//   }

//   return Component;
// };

// export default ProtectedRoute;
