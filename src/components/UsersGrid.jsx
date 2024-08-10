import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersGrid.css'; 
import AdminNavbar from '../Admin/AdminNavbar';
import {Alert} from '@mui/material';

const getRandomId = () => Math.random().toString(36).substr(2, 9);

const UsersGrid = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/userregister', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedUsers = response.data.map(user => ({
          id: getRandomId(),
          userId: user.id,
          username: user.name,
          email: user.email,
          // role: user.role,
          // status: user.status,
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
        setUsers([]);
      }
    };

    fetchData();
  }, []);

  // const handleEditUser = (id) => {
  //   setEditingUserId(id);
  // };

  // const handleSaveUser = async (id) => {
  //   const updatedUser = users.find(user => user.id === id);
  //   try {
  //     await axios.put(`http://localhost:8080/api/users/${updatedUser.userId}`, {
  //       username: updatedUser.username,
  //       email: updatedUser.email,
  //       role: updatedUser.role,
  //       status: updatedUser.status
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     setEditingUserId(null);
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // };

  const handleDeleteUser = async (id) => {
    const userToDelete = users.find(user => user.id === id);
    try {
      await axios.delete(`http://localhost:8080/api/userregister/delete/${userToDelete.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
       
      setUsers(users.filter((user) => user.id !== id));
      setAlertMessage(`User ${userToDelete.username} deleted successfully.`);
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  // const handleUserChange = (e, id) => {
  //   const { name, value } = e.target;
  //   setUsers(users.map((user) => (user.id === id ? { ...user, [name]: value } : user)));
  // };

  return (
    <div className="admin-container">
      <AdminNavbar />
      {alertVisible && (
        <Alert severity="success" className="success-alert">
          {alertMessage}
        </Alert>
      )}
      <div className="user-management">
      <p className='um'>User Management</p>
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {editingUserId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="userId"
                        value={user.userId}
                        readOnly
                        className="input-field"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="username"
                        value={user.username}
                        // onChange={(e) => handleUserChange(e, user.id)}
                        className="input-field"
                        readOnly
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        // onChange={(e) => handleUserChange(e, user.id)}
                        className="input-field"
                        readOnly
                        required
                      />
                    </td>
                    {/* <td>
                      <button className="save-btn" onClick={() => handleSaveUser(user.id)}>Save</button>
                    </td> */}
                  </>
                ) : (
                  <>
                    <td>{user.userId}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersGrid;
