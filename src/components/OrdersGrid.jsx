import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersGrid.css';

const statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
const getRandomId = () => Math.random().toString(36).substr(2, 9);

const OrdersGrid = () => {
  const [rows, setRows] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [newRow, setNewRow] = useState({ customerName: '', orderedItems: '', status: statuses[0], isNew: true });

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:8080/api/orders')  // Adjust the URL according to your backend endpoint
      .then(response => {
        const fetchedRows = response.data.map(order => ({
          id: getRandomId(),
          customerName: order.username,
          orderedItems: order.orderedItems,
          status: order.status || statuses[0],
        }));
        setRows(fetchedRows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddRow = () => {
    setRows([...rows, { ...newRow, id: getRandomId() }]);
    setNewRow({ customerName: '', orderedItems: '', status: statuses[0], isNew: true });
  };

  const handleEditRow = (id) => {
    setEditingRowId(id);
  };

  const handleSaveRow = (id) => {
    setEditingRowId(null);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleRowChange = (e, id) => {
    const { name, value } = e.target;
    setRows(rows.map((row) => (row.id === id ? { ...row, [name]: value } : row)));
  };

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleAcceptOrder = (id) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, status: 'Accepted' } : row)));
  };

  const handleDenyOrder = (id) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, status: 'Denied' } : row)));
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Ordered Items</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {editingRowId === row.id ? (
                <>
                  <td><input type="text" name="customerName" value={row.username} onChange={(e) => handleRowChange(e, row.id)} /></td>
                  {/* <td><input type="text" name="orderedItems" value={row.orderedItems} onChange={(e) => handleRowChange(e, row.id)} /></td> */}
                  <td>
                    <select name="status" value={row.status} onChange={(e) => handleRowChange(e, row.id)}>
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button className="save-btn" onClick={() => handleSaveRow(row.id)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{row.customerName}</td>
                  <td>{row.orderedItems}</td>
                  <td>{row.status}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditRow(row.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteRow(row.id)}>Delete</button>
                    {/* <button className="accept-btn" onClick={() => handleAcceptOrder(row.id)}>Accept</button>
                    <button className="deny-btn" onClick={() => handleDenyOrder(row.id)}>Deny</button> */}
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr>
            <td><input type="text" name="customerName" value={newRow.customerName} onChange={handleNewRowChange} /></td>
            <td><input type="text" name="orderedItems" value={newRow.orderedItems} onChange={handleNewRowChange} /></td>
            <td>
              <select name="status" value={newRow.status} onChange={handleNewRowChange}>
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </td>
            <td><button className="add-btn" onClick={handleAddRow}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersGrid;
