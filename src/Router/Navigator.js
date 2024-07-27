import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import ProductList1 from '../components/ProductList1';
import ProductList2 from '../components/ProductList2';
import ProductList3 from '../components/ProductList3';
import Profile from '../components/Profile';

export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/jwellery" element={<ProductList1 />} />
        <Route path="/category/Decor" element={<ProductList2 />} />
        <Route path="/category/Fabric" element={<ProductList3 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}