import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AdminNavbar from '../Admin/AdminNavbar';
import './Dashboard.css';

const COLORS = ['#8884d8', '#82ca9d'];

function Dashboard() {
  const [customerData, setCustomerData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [orderStatusData, setOrderStatusData] = useState([]);

  useEffect(() => {
    // Fetch Customer Data
    axios.get('http://localhost:8080/api/userregister')
      .then(response => setCustomerData(response.data))
      .catch(error => console.error('Error fetching customer data:', error));

    // Fetch Order Data
    axios.get('http://localhost:8080/api/orders')
      .then(response => setOrderData(response.data))
      .catch(error => console.error('Error fetching order data:', error));

    // Fetch Order Status Data
    axios.get('http://localhost:8080/api/orders/${updatedRow.orderId}/status')
      .then(response => setOrderStatusData(response.data))
      .catch(error => console.error('Error fetching order status data:', error));
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="dashboard">
        <div className="card">
          <h3>Total Orders</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={orderStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className="stats">
            {/* Add any additional stats or calculations based on the fetched data */}
            <span>52% Completed</span>
            <span>48% Pending payment</span>
          </div>
        </div>

        <div className="card">
          <h3>Order Status</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={orderData} dataKey="value" cx="50%" cy="50%" outerRadius={50}>
                {orderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="stats">
            {/* Add any additional stats or calculations based on the fetched data */}
            <span>72% Percentage Discount</span>
            <span>18% Fixed Card Discount</span>
            <span>10% Fixed Product Discount</span>
          </div>
        </div>

        <div className="card">
          <h3>New Customers</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
