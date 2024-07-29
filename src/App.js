// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/product';
import Contact from './pages/contact';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
