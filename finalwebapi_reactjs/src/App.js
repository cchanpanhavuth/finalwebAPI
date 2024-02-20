import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Pages/Products';
import Category from './components/Pages/Category';

import Customers from './components/Pages/Customers';

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)
function App() {

  return (
    <div>
      <div className = 'content'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='products' element={<Products />}></Route>
              <Route path='customers' element={<Customers/>}></Route>
              <Route path='categories' element={<Category/>}></Route>

            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
