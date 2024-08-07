import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import ProductList1 from '../components/ProductList1';
import ProductList2 from '../components/ProductList2';
import ProductList3 from '../components/ProductList3';
import Profile from '../components/Profile';
import CartPage from '../components/CartPage';
import Checkout from '../components/Checkout';
import ScrollToTop from '../components/ScrollToTop';
import ContactUs from '../components/ContactUs';
import BlogList from '../components/BlogList';
import TrackOrder from '../components/TrackOrder';
import OrdersGrid from '../components/OrdersGrid';
import { CartProvider } from '../components/CartContext';
import PrivateRoute from '../components/ProtectedRoute';
import AdminNavbar from '../Admin/AdminNavbar';

export default function Navigator() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/category/jwellery" element={<ProductList1 />} />
          <Route path="/category/Decor" element={<ProductList2 />} />
          <Route path="/category/Fabric" element={<ProductList3 />} />
          <Route path="/connect" element={<BlogList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myorder" element={<TrackOrder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<PrivateRoute component={Profile} />} />
          {/* <Route path="/admin" element={<PrivateRoute component={AdminNavbar} adminRoute />} /> */}
          <Route path="/admin" element={<PrivateRoute component={OrdersGrid} adminRoute />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
