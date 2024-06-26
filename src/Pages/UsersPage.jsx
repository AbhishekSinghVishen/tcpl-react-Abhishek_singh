import React, { useState } from 'react';
import UserData from '../data/UserData'; // Sample data for demonstration
import Table from '../components/Table'; // Table component (to be created)

const UsersPage = () => {
  // State variables
  const [users, setUsers] = useState(UserData); // Sample user data
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering users
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [usersPerPage] = useState(5); // Number of users per page

  // Filtering users based on search term
  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage; // Index of the last user on the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Index of the first user on the current page
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); // Users to be displayed on the current page

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); // Function to update the current page number

  return (
    <div className="container mt-4">
      <h2>Users Page</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Full Name or Email"
        onChange={e => setSearchTerm(e.target.value)} // Update search term state when input value changes
      />
      <Table
        columns={['User ID', 'Full Name', 'Email']} // Table columns
        data={currentUsers} // Data to be displayed in the table
      />
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, index) => ( // Create pagination items based on the number of pages
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

export default UsersPage;
