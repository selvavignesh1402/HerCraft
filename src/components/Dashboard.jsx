// import React from 'react';
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import AdminNavbar from '../Admin/AdminNavbar';
// import './Dashboard.css';

// const customerData = [
//   { name: '01 May', customers: 200 },
//   { name: '02 May', customers: 240 },
//   { name: '03 May', customers: 210 },
//   { name: '04 May', customers: 300 },
//   { name: '05 May', customers: 278 },
//   { name: '06 May', customers: 189 },
//   { name: '07 May', customers: 356 },
// ];

// const orderData = [
//   { name: 'Completed', value: 52 },
//   { name: 'Pending payment', value: 48 },
// ];

// const orderStatusData = [
//   { name: '01 May', orders: 4000 },
//   { name: '02 May', orders: 3000 },
//   { name: '03 May', orders: 2000 },
//   { name: '04 May', orders: 2780 },
//   { name: '05 May', orders: 1890 },
//   { name: '06 May', orders: 2390 },
//   { name: '07 May', orders: 3490 },
// ];

// const COLORS = ['#8884d8', '#82ca9d'];

// function Dashboard() {
//   return (
//     <div>
//       <AdminNavbar />
//       <div className="dashboard">
//         <div className="card">
//           <h3>Total Orders</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={orderStatusData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="orders" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//           <div className="stats">
//             <span>52% Completed</span>
//             <span>48% Pending payment</span>
//           </div>
//         </div>

//         <div className="card">
//           <h3>Order Status</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={orderData} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
//                 {orderData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="stats">
//             <span>52% Completed</span>
//             <span>48% Pending payment</span>
//           </div>
//         </div>

//         <div className="card">
//           <h3>New Customers</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={customerData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="customers" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
