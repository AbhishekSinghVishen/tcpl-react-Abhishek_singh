import React, { useState } from 'react';
import OrderData from '../data/OrdersData'; // Importing sample order data for demonstration
import Table from '../components/Table'; // Importing Table component to be created

const OrdersPage = () => {
  // State variables
  const [orders, setOrders] = useState(OrderData); // Initializing state with sample order data
  const [searchTerm, setSearchTerm] = useState(''); // Initializing search term state
  const [currentPage, setCurrentPage] = useState(1); // Initializing current page state
  const [ordersPerPage] = useState(5); // Setting the number of orders per page

  // Filtering orders based on search term
  const filteredOrders = orders.filter(order =>
    order.orderId.toString().includes(searchTerm.toLowerCase()) ||
    order.userId.toString().includes(searchTerm.toLowerCase()) ||
    order.productId.toString().includes(searchTerm.toLowerCase()) ||
    order.orderDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage; // Index of the last order on the current page
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage; // Index of the first order on the current page
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder); // Orders to be displayed on the current page

  // Function to change the current page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2>Orders Page</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Order ID, User ID, Product ID, or Order Date"
        onChange={e => setSearchTerm(e.target.value)} // Update search term state when input value changes
      />
      <Table
        columns={['Order ID', 'User ID', 'Product ID', 'Order Date']} // Table columns
        data={currentOrders.map(order => ({ // Data to be displayed in the table
          orderId: order.orderId,
          userId: order.userId,
          productId: order.productId,
          orderDate: order.orderDate
        }))}
      />
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }, (_, index) => ( // Create pagination items based on the number of pages
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link"> 
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default OrdersPage;
