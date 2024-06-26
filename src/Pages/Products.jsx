import React, { useState } from 'react';
import ProductData from '../data/ProductData'; // Sample data for demonstration
import Table from '../components/Table'; // Table component (to be created)

const Products = () => {
  // State variables
  const [products, setProducts] = useState(ProductData); // Sample product data
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering products
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [productsPerPage] = useState(5); // Number of products per page

  // Filtering products based on search term
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage; // Index of the last product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Index of the first product on the current page
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); // Products to be displayed on the current page

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); // Function to update the current page number

  return (
    <div className="container mt-4">
      <h2>Products Page</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Product Name"
        onChange={e => setSearchTerm(e.target.value)} // Update search term state when input value changes
      />
      <Table
        columns={['Product ID', 'Product Name', 'Price']} // Table columns
        data={currentProducts.map(product => ({ // Data to be displayed in the table
          productId: product.productId,
          productName: product.productName,
          price: product.price
        }))}
      />
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => ( // Create pagination items based on the number of pages
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

export default Products;

