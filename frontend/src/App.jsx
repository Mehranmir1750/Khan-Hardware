import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Details from './components/Details';
import Details from './pages/Details';
import Login from './pages/Login';


function App() {

  return (
    <>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<Login />} />

    </Routes>
 
     
    </>
  )
}

export default App
