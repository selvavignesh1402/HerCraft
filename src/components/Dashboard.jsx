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


// import React, { useState } from 'react';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { 
//   Plus,
//   ShoppingCart, 
//   DollarSign, 
//   Package, 
//   Users, 
//   TrendingUp,
//   TrendingDown,
//   Clock,
//   Box,
//   Activity,
//   Search,
//   Bell,
//   Settings,
//   Menu,
//   Filter,
//   Download,
//   Calendar,
//   ChevronDown
// } from 'lucide-react';
// import './Dashboard.css';

// const salesData = [
//   { name: 'Jan', value: 4000, previousValue: 3000 },
//   { name: 'Feb', value: 3000, previousValue: 2800 },
//   { name: 'Mar', value: 5000, previousValue: 4200 },
//   { name: 'Apr', value: 4500, previousValue: 4000 },
//   { name: 'May', value: 6000, previousValue: 5200 },
//   { name: 'Jun', value: 5500, previousValue: 4800 }
// ];

// const trafficData = [
//   { name: 'Mon', visits: 2400, pageViews: 4400, bounceRate: 40 },
//   { name: 'Tue', visits: 1398, pageViews: 3400, bounceRate: 45 },
//   { name: 'Wed', visits: 9800, pageViews: 12000, bounceRate: 35 },
//   { name: 'Thu', visits: 3908, pageViews: 5600, bounceRate: 42 },
//   { name: 'Fri', visits: 4800, pageViews: 6800, bounceRate: 38 },
//   { name: 'Sat', visits: 3800, pageViews: 5800, bounceRate: 41 },
//   { name: 'Sun', visits: 4300, pageViews: 6300, bounceRate: 37 }
// ];

// const pieData = [
//   { name: 'Electronics', value: 400 },
//   { name: 'Clothing', value: 300 },
//   { name: 'Books', value: 200 },
//   { name: 'Home', value: 278 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const StatCard = ({ title, value, trend, icon: Icon, color, percentage }) => (
//   <div className={`stat-card ${color}`}>
//     <div className="stat-card-header">
//       <div className="stat-card-info">
//         <h3>{title}</h3>
//         <p>{value}</p>
//       </div>
//       <div className="stat-card-icon">
//         <Icon />
//       </div>
//     </div>
//     <div className={`stat-card-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
//       {trend >= 0 ? <TrendingUp /> : <TrendingDown />}
//       <span>{Math.abs(trend)}% {trend >= 0 ? 'increase' : 'decrease'}</span>
//     </div>
//   </div>
// );

// const TabButton = ({ active, children, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`tab-button ${active ? 'active' : ''}`}
//   >
//     {children}
//   </button>
// );

// const Dashboard = () => {
//   const [timeframe, setTimeframe] = useState('weekly');
//   const [activeTab, setActiveTab] = useState('overview');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showNotifications, setShowNotifications] = useState(false);

//   const TopNavBar = () => (
//       <div className="top-nav">
//         <div className="nav-left">
//           <Menu className="icon" />
//           <div className="search-container">
//             <Search className="search-icon icon-sm" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="search-input"
//             />
//           </div>
//         </div>
      
//         <div className="nav-right">
//         <div className="notifications-container">
//           <Bell 
//             className="icon"
//             onClick={() => setShowNotifications(!showNotifications)}
//           />
//           <span className="notification-badge">3</span>
//         </div>
//         <Settings className="icon" />
//         <div className="user-profile">
//           <div className="profile-avatar"></div>
//           <span className="font-medium">Admin</span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard">
//       <div className="dashboard-container">
//         <TopNavBar />
        
//         <div className="dashboard-header">
//           <div className="header-content">
//             <h1>Dashboard Overview</h1>
//             <p>Welcome back, here's what's happening today</p>
//           </div>
          
//           <div className="header-actions">
//             <div className="timeframe-selector">
//               <Calendar className="icon-sm" />
//               <select 
//                 value={timeframe}
//                 onChange={(e) => setTimeframe(e.target.value)}
//                 className="timeframe-select"
//               >
//                 <option value="daily">Daily</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="monthly">Monthly</option>
//                 <option value="yearly">Yearly</option>
//               </select>
//               <ChevronDown className="icon-sm" />
//             </div>
            
//             <button className="export-button">
//               <Download className="icon-sm" />
//               Export
//             </button>
//           </div>
//         </div>

//         <div className="stats-grid">
//           <StatCard 
//             title="Total Sales" 
//             value="$24,780" 
//             trend={12}
//             icon={DollarSign}
//             color="blue"
//           />
//           <StatCard 
//             title="Total Orders" 
//             value="1,463" 
//             trend={-8}
//             icon={ShoppingCart}
//             color="purple"
//           />
//           <StatCard 
//             title="Active Users" 
//             value="18,243" 
//             trend={24}
//             icon={Users}
//             color="green"
//           />
//           <StatCard 
//             title="Pending Orders" 
//             value="23" 
//             trend={5}
//             icon={Clock}
//             color="yellow"
//           />
//         </div>

//         <div className="charts-grid">
//         <div className="chart-container">
//             <div className="chart-header">
//               <h2>Revenue Overview</h2>
//               <div className="tab-buttons">
//                 <TabButton 
//                   active={activeTab === 'overview'} 
//                   onClick={() => setActiveTab('overview')}
//                 >
//                   Overview
//                 </TabButton>
//                 <TabButton 
//                   active={activeTab === 'details'} 
//                   onClick={() => setActiveTab('details')}
//                 >
//                   Details
//                 </TabButton>
//               </div>
//             </div>
//             <div className="chart-container">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={salesData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="name" stroke="#666" />
//                   <YAxis stroke="#666" />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: '#fff',
//                       border: 'none',
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                     }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="value" 
//                     stroke="#3b82f6" 
//                     strokeWidth={3}
//                     dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
//                     activeDot={{ r: 6 }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="previousValue" 
//                     stroke="#e5e7eb" 
//                     strokeWidth={2}
//                     dot={{ fill: '#e5e7eb', strokeWidth: 2, r: 4 }}
//                     activeDot={{ r: 6 }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="sales-distribution">
//             <h2>Sales Distribution</h2>
//             <div className="pie-chart-container">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="pie-chart-legend">
//                 {pieData.map((entry, index) => (
//                   <div key={entry.name} className="legend-item">
//                     <div 
//                       className="legend-color"
//                       style={{ backgroundColor: COLORS[index % COLORS.length] }}
//                     />
//                     <span className="legend-label">{entry.name}</span>
//                     <span className="legend-value">{entry.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bottom-grid">
//           <div className="list-container">
//             <div className="list-header">
//               <h2 className="chart-title">Recent Orders</h2>
//               <button className="view-all-button">View All</button>
//             </div>
//             <div className="list-content">
//               {[1, 2, 3].map((order) => (
//                 <div key={order} className="list-item">
//                   <div className="item-info">
//                     <p className="item-title">Order #{order}234</p>
//                     <p className="item-subtitle">2 items • $156.00</p>
//                   </div>
//                   <span className="status-badge pending">Pending</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="top-products">
//             <div className="section-header">
//               <h2>Top Products</h2>
//               <button className="view-all">View All</button>
//             </div>
//             <div className="products-list">
//               {[1, 2, 3].map((product) => (
//                 <div key={product} className="product-item">
//                   <div className="product-info">
//                     <div className="product-image"></div>
//                     <div>
//                       <p className="product-name">Product {product}</p>
//                       <p className="product-sales">89 units sold</p>
//                     </div>
//                   </div>
//                   <span className="product-price">$99.00</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="active-users">
//             <div className="section-header">
//               <h2>Active Users</h2>
//               <button className="view-all">View Details</button>
//             </div>
//             <div className="users-list">
//               {[1, 2, 3].map((user) => (
//                 <div key={user} className="user-item">
//                   <div className="user-info">
//                     <div className="user-avatar">{`U${user}`}</div>
//                     <div>
//                       <p className="user-name">John Doe {user}</p>
//                       <p className="user-status">Last active: 2m ago</p>
//                     </div>
//                   </div>
//                   <div className="online-status">
//                     <span className="status-dot"></span>
//                     <span className="status-text">Online</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {showNotifications && (
//           <div className="notifications-panel">
//             <div className="notifications-header">
//               <h3>Notifications</h3>
//               <span className="mark-read">Mark all as read</span>
//             </div>
//             <div className="notifications-list">
//               {[
//                 {
//                   type: 'order',
//                   message: 'New order received',
//                   time: '2 minutes ago',
//                   read: false
//                 },
//                 {
//                   type: 'user',
//                   message: 'New user registration',
//                   time: '1 hour ago',
//                   read: false
//                 },
//                 {
//                   type: 'alert',
//                   message: 'Low stock alert: Product XYZ',
//                   time: '3 hours ago',
//                   read: true
//                 }
//               ].map((notification, index) => (
//                 <div
//                   key={index}
//                   className={`notification-item ${!notification.read ? 'unread' : ''}`}
//                 >
//                   <div className="notification-content">
//                     <div className={`notification-icon ${notification.type}`}>
//                       {notification.type === 'order' ? <ShoppingCart /> :
//                        notification.type === 'user' ? <Users /> :
//                        <Bell />}
//                     </div>
//                     <div className="notification-text">
//                       <p className="notification-message">{notification.message}</p>
//                       <p className="notification-time">{notification.time}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="notifications-footer">
//               <button className="view-all-notifications">
//                 View All Notifications
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="quick-actions">
//           <div className="quick-actions-container">
//             <button className="quick-action-button">
//             <Plus className="icon-sm" />
//             </button>
//             <div className="quick-actions-menu">
//               <button className="quick-action-item">
//               <ShoppingCart className="icon-sm" />
//                 New Order
//               </button>
//               <button className="quick-action-item">
//                 <Package className="icon-sm" />
//                 Add Product
//               </button>
//               <button className="quick-action-item">
//               <Users className="icon-sm" />
//                 Add User
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;