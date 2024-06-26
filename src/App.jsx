// src/App.js
import React from 'react';
import { Link , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JavaScript

import SignUp from './Forms/SignUpForm';
import Login from './Forms/LoginForm'
import Navbar from './components/Navbar'; 
import Dashboard from './components/DashboardePage';

import User from './Pages/UsersPage' 
import Product from './Pages/Products' 
import Order from './Pages/Orders'


function App() {
  return (
    <>
    
      <Navbar/>
      
     <Routes>
       
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path= '/dashboard/*' element={<Dashboard/>}/>
       <Route path='/users' element={<User/>} />
     <Route path='/products' element={<Product/>} />
     <Route path= '/orders' element={<Order/>}/>
    
     </Routes>
   </>
  );
}

export default App;