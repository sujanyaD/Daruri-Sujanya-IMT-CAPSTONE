
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout';
import Products from './pages/productsForm';
import Sales from './pages/salesFom';
import Login from './pages/login';
import Register from './pages/register';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
         <Route exact path="/login" element={<Login/>} />
         <Route exact path="/register" element={<Register/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;