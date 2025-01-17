import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products'; 
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes> 
      </Router>
    </>
  );
}

export default App;
