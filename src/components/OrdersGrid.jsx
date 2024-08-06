import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersGrid.css';

const statuses = ['waiting', 'Shipped', 'Delivered', 'Cancelled'];
const getRandomId = () => Math.random().toString(36).substr(2, 9);

const OrdersGrid = () => {
  const [rows, setRows] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust according to how you store the token
        const response = await axios.get('http://localhost:8080/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedRows = response.data.map(order => ({
          id: getRandomId(),
          orderId: order.orderId, // Include orderId
          customerName: order.username,
          orderedItems: order.items.map(item => ({
            productName: item.productName,
            quantity: item.quantity,
            price: item.price,
          })),
          status: order.status || statuses[0],
          paymentStatus: order.paymentStatus, 
          totalPrice:order.totalPrice,
          address:order.address
        }));
        setRows(fetchedRows);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRows([]);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th> {/* Add column header for Order ID */}
            <th>Customer Name</th>
            <th>Ordered Items</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Payment Status</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {editingRowId === row.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="orderId"
                      value={row.orderId}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="customerName"
                      value={row.customerName}
                      readOnly
                      required
                    />
                  </td>
                  <td>
                    {row.orderedItems.map((item, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          name={`productName-${index}`}
                          value={item.productName}
                          readOnly
                          required
                        />
                        <input
                          type="number"
                          name={`quantity-${index}`}
                          value={item.quantity}
                          readOnly
                          required
                        />
                        <input
                          type="number"
                          name={`price-${index}`}
                          value={item.price}
                          readOnly
                          required
                        />
                      </div>
                    ))}
                  </td>
                  <td>
                  <input
                      type="text"
                      name="totalPrice"
                      value={row.totalPrice}
                      readOnly
                      required
                    />
                  </td>
                  <td>
                    <select name="status" value={row.status} onChange={(e) => handleRowChange(e, row.id)}>
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="paymentStatus"
                      value={row.paymentStatus}
                      readOnly
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={row.address}
                      readOnly
                      required
                    />
                  </td>
                  <td>
                    <button className="save-btn" onClick={() => handleSaveRow(row.id)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{row.orderId}</td> 
                  <td>{row.customerName}</td>
                  <td>
                    {row.orderedItems.map((item, index) => (
                      <div key={index}>
                        <p>Products: </p>
                        {item.productName}
                        <p>Quantity: {item.quantity}</p>
                        {/* // <p>Price: ₹{item.price.toFixed(2)}</p> */}
                      </div>
                    ))}
                  </td>
                  <td>₹{row.totalPrice}</td>
                  <td>{row.status}</td>
                  <td>{row.paymentStatus}</td>
                  <td>{row.address}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditRow(row.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteRow(row.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersGrid;
