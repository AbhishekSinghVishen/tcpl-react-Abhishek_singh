import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPageNav = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <nav className="nav nav-pills">
            <Link className="nav-link mx-2" to="/users">Users</Link>
            <Link className="nav-link mx-2" to="/products">Products</Link>
            <Link className="nav-link mx-2" to="/orders">Orders</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageNav;
