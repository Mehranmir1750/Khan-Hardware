import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Details from './components/Details';
import Details from './pages/Details';
import Login from './pages/Login';
import Admin from './pages/Admin';


function App() {

  return (
    <>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<Admin />} />

    </Routes>
 
     
    </>
  )
}

export default App
