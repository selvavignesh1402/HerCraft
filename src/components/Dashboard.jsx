import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AdminNavbar from '../Admin/AdminNavbar';
import './Dashboard.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Dummy Data
    const dummyOrderStatusData = [
      { name: 'Awaiting Processing', value: 57 },
      { name: 'On Hold', value: 5 },
      { name: 'Out of Stock', value: 15 },
    ];
    setOrderStatusData(dummyOrderStatusData);

    const dummySalesData = [
      { name: 'Jan', sales: 300 },
      { name: 'Feb', sales: 500 },
      { name: 'Mar', sales: 200 },
      { name: 'Apr', sales: 600 },
      { name: 'May', sales: 400 },
      { name: 'Jun', sales: 700 },
    ];
    setSalesData(dummySalesData);
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="dashboard">
        <h2 className='dhead'>Welcome to Dashboard</h2> {/* Added Heading */}
        
        <div className="summary-cards">
          <div className="card new-orders">
            <div className="card-content">
              <div className="icon">&#x1F4E6;</div>
              <div>
                <h4>57 new orders</h4>
                <span>Awaiting processing</span>
              </div>
            </div>
          </div>

          <div className="card on-hold">
            <div className="card-content">
              <div className="icon">&#x23F8;</div>
              <div>
                <h4>5 orders</h4>
                <span>On hold</span>
              </div>
            </div>
          </div>

          <div className="card out-of-stock">
            <div className="card-content">
              <div className="icon">&#x274C;</div>
              <div>
                <h4>15 products</h4>
                <span>Out of stock</span>
              </div>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="dcard">
            <h3>Order Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="dcard">
            <h3>Sales Data</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
