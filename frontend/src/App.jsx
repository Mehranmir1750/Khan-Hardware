// import { useState } from 'react'
import Home from './pages/Home'
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Details from './components/Details';
import Details from './pages/Details';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AddCustomer from './pages/AddCustomer';
import Customer from './pages/Customer';
import Transactions from './pages/Transaction';
import AddTransaction from './pages/AddTransaction';
import Edit from './pages/Edit';
import { Navigate } from "react-router-dom";

function App() {

  // Add this component at the top of App.jsx
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

  return (
    <>

    <Routes>

  {/* Public Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/details" element={<Details />} />
  <Route path="/details/:id" element={<Details />} />

  {/* Protected Routes */}
  <Route
    path="/admin-dashboard"
    element={<ProtectedRoute element={<Admin />} />}
  />

  <Route
    path="/add-customer"
    element={<ProtectedRoute element={<AddCustomer />} />}
  />

  <Route
    path="/customer"
    element={<ProtectedRoute element={<Customer />} />}
  />

  <Route
    path="/transactions"
    element={<ProtectedRoute element={<Transactions />} />}
  />

  <Route
    path="/add-transactions"
    element={<ProtectedRoute element={<AddTransaction />} />}
  />

  <Route
    path="/edit-transaction/:id"
    element={<ProtectedRoute element={<Edit />} />}
  />

  <Route
    path="/logout"
    element={<ProtectedRoute element={<Home />} />}
  />

</Routes>
 
     
    </>
  )
}

export default App
