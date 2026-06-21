import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter } from "react-router-dom";
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

function App() {

  return (
    <>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<Admin />} />
      <Route path="/add-customer" element={<AddCustomer />} />
      <Route path='/Customer' element={<Customer/>} />
      <Route path='/Transactions' element={<Transactions/>} />
      <Route path='/add-transactions' element={<AddTransaction/>} />
      <Route path='/logout' element={<Home/>} />
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/edit-transaction/:id" element={<Edit />}/>

    </Routes>
 
     
    </>
  )
}

export default App
