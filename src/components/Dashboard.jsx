// import React, { useEffect, useState } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import AdminNavbar from '../Admin/AdminNavbar';
// import './Dashboard.css';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const Dashboard = () => {
//   const [orderStatusData, setOrderStatusData] = useState([]);
//   const [salesData, setSalesData] = useState([]);

//   useEffect(() => {
//     // Dummy Data
//     const dummyOrderStatusData = [
//       { name: 'Awaiting Processing', value: 57 },
//       { name: 'On Hold', value: 5 },
//       { name: 'Out of Stock', value: 15 },
//     ];
//     setOrderStatusData(dummyOrderStatusData);

//     const dummySalesData = [
//       { name: 'Jan', sales: 300 },
//       { name: 'Feb', sales: 500 },
//       { name: 'Mar', sales: 200 },
//       { name: 'Apr', sales: 600 },
//       { name: 'May', sales: 400 },
//       { name: 'Jun', sales: 700 },
//     ];
//     setSalesData(dummySalesData);
//   }, []);

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="dashboard">
//         <h2 className='dhead'>Welcome to Dashboard</h2> {/* Added Heading */}
        
//         <div className="summary-cards">
//           <div className="card new-orders">
//             <div className="card-content">
//               <div className="icon">&#x1F4E6;</div>
//               <div>
//                 <h4>57 new orders</h4>
//                 <span>Awaiting processing</span>
//               </div>
//             </div>
//           </div>

//           <div className="card on-hold">
//             <div className="card-content">
//               <div className="icon">&#x23F8;</div>
//               <div>
//                 <h4>5 orders</h4>
//                 <span>On hold</span>
//               </div>
//             </div>
//           </div>

//           <div className="card out-of-stock">
//             <div className="card-content">
//               <div className="icon">&#x274C;</div>
//               <div>
//                 <h4>15 products</h4>
//                 <span>Out of stock</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="charts">
//           <div className="dcard">
//             <h3>Order Status</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={orderStatusData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label
//                 >
//                   {orderStatusData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="dcard">
//             <h3>Sales Data</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={salesData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// // import React, { useState } from 'react';
// // import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// // import { 
// //   Plus,
// //   ShoppingCart, 
// //   DollarSign, 
// //   Package, 
// //   Users, 
// //   TrendingUp,
// //   TrendingDown,
// //   Clock,
// //   Box,
// //   Activity,
// //   Search,
// //   Bell,
// //   Settings,
// //   Menu,
// //   Filter,
// //   Download,
// //   Calendar,
// //   ChevronDown
// // } from 'lucide-react';
// // import './Dashboard.css';

// // const salesData = [
// //   { name: 'Jan', value: 4000, previousValue: 3000 },
// //   { name: 'Feb', value: 3000, previousValue: 2800 },
// //   { name: 'Mar', value: 5000, previousValue: 4200 },
// //   { name: 'Apr', value: 4500, previousValue: 4000 },
// //   { name: 'May', value: 6000, previousValue: 5200 },
// //   { name: 'Jun', value: 5500, previousValue: 4800 }
// // ];

// // const trafficData = [
// //   { name: 'Mon', visits: 2400, pageViews: 4400, bounceRate: 40 },
// //   { name: 'Tue', visits: 1398, pageViews: 3400, bounceRate: 45 },
// //   { name: 'Wed', visits: 9800, pageViews: 12000, bounceRate: 35 },
// //   { name: 'Thu', visits: 3908, pageViews: 5600, bounceRate: 42 },
// //   { name: 'Fri', visits: 4800, pageViews: 6800, bounceRate: 38 },
// //   { name: 'Sat', visits: 3800, pageViews: 5800, bounceRate: 41 },
// //   { name: 'Sun', visits: 4300, pageViews: 6300, bounceRate: 37 }
// // ];

// // const pieData = [
// //   { name: 'Electronics', value: 400 },
// //   { name: 'Clothing', value: 300 },
// //   { name: 'Books', value: 200 },
// //   { name: 'Home', value: 278 },
// // ];

// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// // const StatCard = ({ title, value, trend, icon: Icon, color, percentage }) => (
// //   <div className={`stat-card ${color}`}>
// //     <div className="stat-card-header">
// //       <div className="stat-card-info">
// //         <h3>{title}</h3>
// //         <p>{value}</p>
// //       </div>
// //       <div className="stat-card-icon">
// //         <Icon />
// //       </div>
// //     </div>
// //     <div className={`stat-card-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
// //       {trend >= 0 ? <TrendingUp /> : <TrendingDown />}
// //       <span>{Math.abs(trend)}% {trend >= 0 ? 'increase' : 'decrease'}</span>
// //     </div>
// //   </div>
// // );

// // const TabButton = ({ active, children, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     className={`tab-button ${active ? 'active' : ''}`}
// //   >
// //     {children}
// //   </button>
// // );

// // const Dashboard = () => {
// //   const [timeframe, setTimeframe] = useState('weekly');
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [showNotifications, setShowNotifications] = useState(false);

// //   const TopNavBar = () => (
// //       <div className="top-nav">
// //         <div className="nav-left">
// //           <Menu className="icon" />
// //           <div className="search-container">
// //             <Search className="search-icon icon-sm" />
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="search-input"
// //             />
// //           </div>
// //         </div>
      
// //         <div className="nav-right">
// //         <div className="notifications-container">
// //           <Bell 
// //             className="icon"
// //             onClick={() => setShowNotifications(!showNotifications)}
// //           />
// //           <span className="notification-badge">3</span>
// //         </div>
// //         <Settings className="icon" />
// //         <div className="user-profile">
// //           <div className="profile-avatar"></div>
// //           <span className="font-medium">Admin</span>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="dashboard">
// //       <div className="dashboard-container">
// //         <TopNavBar />
        
// //         <div className="dashboard-header">
// //           <div className="header-content">
// //             <h1>Dashboard Overview</h1>
// //             <p>Welcome back, here's what's happening today</p>
// //           </div>
          
// //           <div className="header-actions">
// //             <div className="timeframe-selector">
// //               <Calendar className="icon-sm" />
// //               <select 
// //                 value={timeframe}
// //                 onChange={(e) => setTimeframe(e.target.value)}
// //                 className="timeframe-select"
// //               >
// //                 <option value="daily">Daily</option>
// //                 <option value="weekly">Weekly</option>
// //                 <option value="monthly">Monthly</option>
// //                 <option value="yearly">Yearly</option>
// //               </select>
// //               <ChevronDown className="icon-sm" />
// //             </div>
            
// //             <button className="export-button">
// //               <Download className="icon-sm" />
// //               Export
// //             </button>
// //           </div>
// //         </div>

// //         <div className="stats-grid">
// //           <StatCard 
// //             title="Total Sales" 
// //             value="$24,780" 
// //             trend={12}
// //             icon={DollarSign}
// //             color="blue"
// //           />
// //           <StatCard 
// //             title="Total Orders" 
// //             value="1,463" 
// //             trend={-8}
// //             icon={ShoppingCart}
// //             color="purple"
// //           />
// //           <StatCard 
// //             title="Active Users" 
// //             value="18,243" 
// //             trend={24}
// //             icon={Users}
// //             color="green"
// //           />
// //           <StatCard 
// //             title="Pending Orders" 
// //             value="23" 
// //             trend={5}
// //             icon={Clock}
// //             color="yellow"
// //           />
// //         </div>

// //         <div className="charts-grid">
// //         <div className="chart-container">
// //             <div className="chart-header">
// //               <h2>Revenue Overview</h2>
// //               <div className="tab-buttons">
// //                 <TabButton 
// //                   active={activeTab === 'overview'} 
// //                   onClick={() => setActiveTab('overview')}
// //                 >
// //                   Overview
// //                 </TabButton>
// //                 <TabButton 
// //                   active={activeTab === 'details'} 
// //                   onClick={() => setActiveTab('details')}
// //                 >
// //                   Details
// //                 </TabButton>
// //               </div>
// //             </div>
// //             <div className="chart-container">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <LineChart data={salesData}>
// //                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
// //                   <XAxis dataKey="name" stroke="#666" />
// //                   <YAxis stroke="#666" />
// //                   <Tooltip 
// //                     contentStyle={{ 
// //                       backgroundColor: '#fff',
// //                       border: 'none',
// //                       borderRadius: '8px',
// //                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
// //                     }}
// //                   />
// //                   <Line 
// //                     type="monotone" 
// //                     dataKey="value" 
// //                     stroke="#3b82f6" 
// //                     strokeWidth={3}
// //                     dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
// //                     activeDot={{ r: 6 }}
// //                   />
// //                   <Line 
// //                     type="monotone" 
// //                     dataKey="previousValue" 
// //                     stroke="#e5e7eb" 
// //                     strokeWidth={2}
// //                     dot={{ fill: '#e5e7eb', strokeWidth: 2, r: 4 }}
// //                     activeDot={{ r: 6 }}
// //                   />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>

// //           <div className="sales-distribution">
// //             <h2>Sales Distribution</h2>
// //             <div className="pie-chart-container">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <PieChart>
// //                   <Pie
// //                     data={pieData}
// //                     innerRadius={60}
// //                     outerRadius={80}
// //                     paddingAngle={5}
// //                     dataKey="value"
// //                   >
// //                     {pieData.map((entry, index) => (
// //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                     ))}
// //                   </Pie>
// //                   <Tooltip />
// //                 </PieChart>
// //               </ResponsiveContainer>
// //               <div className="pie-chart-legend">
// //                 {pieData.map((entry, index) => (
// //                   <div key={entry.name} className="legend-item">
// //                     <div 
// //                       className="legend-color"
// //                       style={{ backgroundColor: COLORS[index % COLORS.length] }}
// //                     />
// //                     <span className="legend-label">{entry.name}</span>
// //                     <span className="legend-value">{entry.value}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bottom-grid">
// //           <div className="list-container">
// //             <div className="list-header">
// //               <h2 className="chart-title">Recent Orders</h2>
// //               <button className="view-all-button">View All</button>
// //             </div>
// //             <div className="list-content">
// //               {[1, 2, 3].map((order) => (
// //                 <div key={order} className="list-item">
// //                   <div className="item-info">
// //                     <p className="item-title">Order #{order}234</p>
// //                     <p className="item-subtitle">2 items • $156.00</p>
// //                   </div>
// //                   <span className="status-badge pending">Pending</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="top-products">
// //             <div className="section-header">
// //               <h2>Top Products</h2>
// //               <button className="view-all">View All</button>
// //             </div>
// //             <div className="products-list">
// //               {[1, 2, 3].map((product) => (
// //                 <div key={product} className="product-item">
// //                   <div className="product-info">
// //                     <div className="product-image"></div>
// //                     <div>
// //                       <p className="product-name">Product {product}</p>
// //                       <p className="product-sales">89 units sold</p>
// //                     </div>
// //                   </div>
// //                   <span className="product-price">$99.00</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="active-users">
// //             <div className="section-header">
// //               <h2>Active Users</h2>
// //               <button className="view-all">View Details</button>
// //             </div>
// //             <div className="users-list">
// //               {[1, 2, 3].map((user) => (
// //                 <div key={user} className="user-item">
// //                   <div className="user-info">
// //                     <div className="user-avatar">{`U${user}`}</div>
// //                     <div>
// //                       <p className="user-name">John Doe {user}</p>
// //                       <p className="user-status">Last active: 2m ago</p>
// //                     </div>
// //                   </div>
// //                   <div className="online-status">
// //                     <span className="status-dot"></span>
// //                     <span className="status-text">Online</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {showNotifications && (
// //           <div className="notifications-panel">
// //             <div className="notifications-header">
// //               <h3>Notifications</h3>
// //               <span className="mark-read">Mark all as read</span>
// //             </div>
// //             <div className="notifications-list">
// //               {[
// //                 {
// //                   type: 'order',
// //                   message: 'New order received',
// //                   time: '2 minutes ago',
// //                   read: false
// //                 },
// //                 {
// //                   type: 'user',
// //                   message: 'New user registration',
// //                   time: '1 hour ago',
// //                   read: false
// //                 },
// //                 {
// //                   type: 'alert',
// //                   message: 'Low stock alert: Product XYZ',
// //                   time: '3 hours ago',
// //                   read: true
// //                 }
// //               ].map((notification, index) => (
// //                 <div
// //                   key={index}
// //                   className={`notification-item ${!notification.read ? 'unread' : ''}`}
// //                 >
// //                   <div className="notification-content">
// //                     <div className={`notification-icon ${notification.type}`}>
// //                       {notification.type === 'order' ? <ShoppingCart /> :
// //                        notification.type === 'user' ? <Users /> :
// //                        <Bell />}
// //                     </div>
// //                     <div className="notification-text">
// //                       <p className="notification-message">{notification.message}</p>
// //                       <p className="notification-time">{notification.time}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="notifications-footer">
// //               <button className="view-all-notifications">
// //                 View All Notifications
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         <div className="quick-actions">
// //           <div className="quick-actions-container">
// //             <button className="quick-action-button">
// //             <Plus className="icon-sm" />
// //             </button>
// //             <div className="quick-actions-menu">
// //               <button className="quick-action-item">
// //               <ShoppingCart className="icon-sm" />
// //                 New Order
// //               </button>
// //               <button className="quick-action-item">
// //                 <Package className="icon-sm" />
// //                 Add Product
// //               </button>
// //               <button className="quick-action-item">
// //               <Users className="icon-sm" />
// //                 Add User
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
// import { Search, TrendingUp, Users, DollarSign } from 'lucide-react';

// // Add CSS styles
// const styles = `
//   .dashboard {
//     padding: 24px;
//     background: #f8fafc;
//     min-height: 100vh;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//   }

//   .card {
//     background: white;
//     border-radius: 12px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//     transition: all 0.3s cubic-bezier(.25,.8,.25,1);
//   }

//   .card:hover {
//     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
//   }

//   .grid-3 {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 24px;
//     margin-bottom: 24px;
//   }

//   .grid-2 {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 24px;
//     margin-bottom: 24px;
//   }

//   .stat-card {
//     padding: 20px;
//   }

//   .stat-card-content {
//     display: flex;
//     align-items: center;
//     gap: 16px;
//   }

//   .stat-icon {
//     padding: 12px;
//     border-radius: 12px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .stat-icon.green { background: #dcfce7; color: #16a34a; }
//   .stat-icon.blue { background: #dbeafe; color: #2563eb; }
//   .stat-icon.red { background: #fee2e2; color: #dc2626; }

//   .stat-info h3 {
//     color: #64748b;
//     font-size: 14px;
//     margin: 0;
//   }

//   .stat-info p {
//     font-size: 24px;
//     font-weight: 600;
//     margin: 4px 0;
//   }

//   .stat-info small {
//     font-size: 14px;
//   }

//   .small-text-green { color: #16a34a; }
//   .small-text-blue { color: #2563eb; }
//   .small-text-red { color: #dc2626; }

//   .chart-card {
//     padding: 24px;
//   }

//   .chart-card h2 {
//     margin: 0 0 20px 0;
//     color: #1e293b;
//     font-size: 18px;
//   }

//   .table-card {
//     padding: 24px;
//   }

//   .table-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 20px;
//   }

//   .search-box {
//     position: relative;
//   }

//   .search-box input {
//     padding: 8px 16px 8px 40px;
//     border: 1px solid #e2e8f0;
//     border-radius: 8px;
//     font-size: 14px;
//     outline: none;
//     width: 240px;
//   }

//   .search-box input:focus {
//     border-color: #2563eb;
//     box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
//   }

//   .search-icon {
//     position: absolute;
//     left: 12px;
//     top: 50%;
//     transform: translateY(-50%);
//     color: #64748b;
//   }

//   table {
//     width: 100%;
//     border-collapse: collapse;
//   }

//   th, td {
//     padding: 12px;
//     text-align: left;
//     border-bottom: 1px solid #e2e8f0;
//   }

//   th {
//     color: #64748b;
//     font-weight: 500;
//     font-size: 14px;
//   }

//   td {
//     color: #1e293b;
//     font-size: 14px;
//   }

//   .customer-list {
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//   }

//   .customer-item {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 8px 0;
//   }

//   .customer-info {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//   }

//   .customer-avatar {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background: #e2e8f0;
//   }

//   .customer-details h4 {
//     margin: 0;
//     color: #1e293b;
//     font-size: 14px;
//   }

//   .customer-details p {
//     margin: 4px 0 0 0;
//     color: #64748b;
//     font-size: 12px;
//   }

//   .status-indicator {
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//   }

//   .status-indicator.active { background: #16a34a; }
//   .status-indicator.pending { background: #eab308; }
//   .status-indicator.canceled { background: #dc2626; }
// `;

// // Your existing data constants remain the same
// const revenueData = [
//   { name: 'Jan', google: 120, facebook: 110 },
//   { name: 'Feb', google: 125, facebook: 115 },
//   { name: 'Mar', google: 130, facebook: 112 },
//   { name: 'Apr', google: 125, facebook: 118 },
//   { name: 'May', google: 120, facebook: 125 },
//   { name: 'Jun', google: 115, facebook: 122 },
//   { name: 'Jul', google: 110, facebook: 115 }
// ];

// const visitorData = [
//   { name: 'Direct', value: 35 },
//   { name: 'Organic', value: 25 },
//   { name: 'Paid', value: 20 },
//   { name: 'Social', value: 20 }
// ];

// const COLORS = ['#0ea5e9', '#f97316', '#22c55e', '#8b5cf6'];

// const products = [
//   { id: 1, name: 'Nike v22', orders: 65000, price: '$120', adSpent: '$15,000', refunds: 78 },
//   { id: 2, name: 'Adidas Originals', orders: 55000, price: '$95', adSpent: '$14,500', refunds: 56 },
//   { id: 3, name: 'Puma', orders: 50000, price: '$85', adSpent: '$12,000', refunds: 45 },
//   { id: 4, name: 'Reebok', orders: 45000, price: '$105', adSpent: '$11,120', refunds: 67 },
//   { id: 5, name: 'Brooks', orders: 35000, price: '$75', adSpent: '$10,000', refunds: 34 }
// ];

// const newCustomers = [
//   { id: 1, name: 'Jennifer Peterson', status: 'Completed' },
//   { id: 2, name: 'James Smith', status: 'Pending' },
//   { id: 3, name: 'Michael Handler', status: 'Canceled' },
//   { id: 4, name: 'Sandra Scott', status: 'Completed' }
// ];

// const buyerProfileData = [
//   { name: 'Active', value: 45 },
//   { name: 'Inactive', value: 35 },
//   { name: 'New', value: 20 }
// ];

// const Dashboard = () => {
//   return (
//     <>
//       <style>{styles}</style>
//       <div className="dashboard">
//         {/* Top Stats */}
//         <div className="grid-3">
//           <div className="card stat-card">
//             <div className="stat-card-content">
//               <div className="stat-icon green">
//                 <TrendingUp size={24} />
//               </div>
//               <div className="stat-info">
//                 <h3>Sales</h3>
//                 <p>$23,532</p>
//                 <small className="small-text-green">+2.4% last month</small>
//               </div>
//             </div>
//           </div>
          
//           <div className="card stat-card">
//             <div className="stat-card-content">
//               <div className="stat-icon blue">
//                 <Users size={24} />
//               </div>
//               <div className="stat-info">
//                 <h3>Customers</h3>
//                 <p>8,549</p>
//                 <small className="small-text-blue">+1.7% last month</small>
//               </div>
//             </div>
//           </div>
          
//           <div className="card stat-card">
//             <div className="stat-card-content">
//               <div className="stat-icon red">
//                 <DollarSign size={24} />
//               </div>
//               <div className="stat-info">
//                 <h3>Avg Revenue</h3>
//                 <p>$1,205</p>
//                 <small className="small-text-red">-0.8% last month</small>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid-3">
//           <div className="card chart-card" style={{ gridColumn: 'span 2' }}>
//             <h2>Revenue</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={revenueData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line 
//                   type="monotone" 
//                   dataKey="google" 
//                   stroke="#0ea5e9" 
//                   strokeWidth={2}
//                   dot={{ stroke: '#0ea5e9', strokeWidth: 2, r: 4 }}
//                   activeDot={{ r: 6 }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="facebook" 
//                   stroke="#f97316" 
//                   strokeWidth={2}
//                   dot={{ stroke: '#f97316', strokeWidth: 2, r: 4 }}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="card chart-card">
//             <h2>Website Visitors</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={visitorData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={80}
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {visitorData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Products Table */}
//         <div className="card table-card">
//           <div className="table-header">
//             <h2>Top Selling Products</h2>
//             <div className="search-box">
//               <Search className="search-icon" size={20} />
//               <input type="text" placeholder="Search products..." />
//             </div>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Orders</th>
//                 <th>Price</th>
//                 <th>Ads Spent</th>
//                 <th>Refunds</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.name}</td>
//                   <td>{product.orders.toLocaleString()}</td>
//                   <td>{product.price}</td>
//                   <td>{product.adSpent}</td>
//                   <td>{product.refunds}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bottom Section */}
//         <div className="grid-2">
//           <div className="card chart-card">
//             <h2>New Customers</h2>
//             <div className="customer-list">
//               {newCustomers.map((customer) => (
//                 <div key={customer.id} className="customer-item">
//                   <div className="customer-info">
//                     <div className="customer-avatar" />
//                     <div className="customer-details">
//                       <h4>{customer.name}</h4>
//                       <p>{customer.status}</p>
//                     </div>
//                   </div>
//                   <div 
//                     className={`status-indicator ${customer.status.toLowerCase()}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="card chart-card">
//             <h2>Buyers Profile</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={buyerProfileData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={80}
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {buyerProfileData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;



import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, MoreHorizontal, Mail } from 'lucide-react';
import './Dashboard.css';
import AdminNavbar from '../Admin/AdminNavbar';

const revenueData = [
  { name: 'Jan', google: 60, facebook: 20 },
  { name: 'Feb', google: 200, facebook: 120 },
  { name: 'Mar', google: 180, facebook: 100 },
  { name: 'Apr', google: 140, facebook: 40 },
  { name: 'May', google: 100, facebook: 300 },
  { name: 'Jun', google: 20, facebook: 120 },
  { name: 'Jul', google: 120, facebook: 100 },
  { name: 'Aug', google: 20, facebook: 180 }
];

const visitorData = [
  { name: 'Direct', value: 38 },
  { name: 'Organic', value: 22 },
  { name: 'Paid', value: 12 },
  { name: 'Social', value: 28 }
];

const newCustomers = [
  { name: 'Roselle Ehrman', location: 'Brazil' },
  { name: 'Jone Smith', location: 'Australia' },
  { name: 'Darron Handler', location: 'Pakistan' },
  { name: 'Leatrice Kulik', location: 'Moscow' }
];

const buyerProfileData = [
  { name: 'Male', value: 50 },
  { name: 'Female', value: 35 },
  { name: 'Others', value: 15 }
];

const COLORS = {
  visitors: ['#f97316', '#22c55e', '#0ea5e9', '#ef4444'],
  buyers: ['#f97316', '#22c55e', '#ef4444']
};

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar/>
    
    <div className="dashboard-container">
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="dcard">
          <div className="stat-card">
            <div className="stat-icon green">
              <TrendingUp />
            </div>
            <div className="stat-content">
              <h3>Sales</h3>
              <p>$23,532</p>
              <span className="green">+2.4% last month</span>
            </div>
          </div>
        </div>

        <div className="dcard">
          <div className="stat-card">
            <div className="stat-icon blue">
              <Users />
            </div>
            <div className="stat-content">
              <h3>Customers</h3>
              <p>8,549</p>
              <span className="blue">+1.7% last month</span>
            </div>
          </div>
        </div>

        <div className="dcard">
          <div className="stat-card">
            <div className="stat-icon red">
              <DollarSign />
            </div>
            <div className="stat-content">
              <h3>Avg Revenue</h3>
              <p>$1,205</p>
              <span className="red">-0.8% last month</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="charts-grid">
        {/* Revenue Chart */}
        <div className="dcard col-span-2">
          <div className="dcard-header">
            <h2 className="dcard-title">Revenue</h2>
            <div className="legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#22c55e' }}></div>
                <span className="legend-label">Google ads</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#f97316' }}></div>
                <span className="legend-label">Facebook ads</span>
              </div>
            </div>
          </div>
          <div className="revenue-chart">
            <ResponsiveContainer>
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="google" 
                  className="google-line"
                  dot={{ stroke: '#22c55e', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="facebook" 
                  className="facebook-line"
                  dot={{ stroke: '#f97316', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Website Visitors */}
        <div className="dcard">
          <div className="dcard-header">
            <h2 className="dcard-title">Website Visitors</h2>
          </div>
          <div className="pie-chart-container">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={visitorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {visitorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS.visitors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {visitorData.map((item, index) => (
              <div key={item.name} className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: COLORS.visitors[index] }}></div>
                <span className="legend-label">{item.name}</span>
                <span className="legend-value">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid">
        {/* New Customers */}
        {/* <div className="card">
          <div className="card-header">
            <h2 className="card-title">New Customers</h2>
            <MoreHorizontal />
          </div>
          <div className="customer-list">
            {newCustomers.map((customer, index) => (
              <div key={index} className="customer-item">
                <div className="customer-info">
                  <div className="customer-avatar"></div>
                  <div className="customer-details">
                    <h4>{customer.name}</h4>
                    <p>{customer.location}</p>
                  </div>
                </div>
                <Mail />
              </div>
            ))}
          </div>
        </div> */}

        {/* Buyers Profile */}
        <div className="dcard">
          <div className="dcard-header">
            <h2 className="dcard-title">Buyers Profile</h2>
            <MoreHorizontal />
          </div>
          <div className="pie-chart-container">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={buyerProfileData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {buyerProfileData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS.buyers[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {buyerProfileData.map((item, index) => (
              <div key={item.name} className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: COLORS.buyers[index] }}></div>
                <span className="legend-label">{item.name}</span>
                <span className="legend-value">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;