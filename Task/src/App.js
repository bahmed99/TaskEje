import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Nav_bar from './components/Navbar/Nav_bar'
import MainRouter from './MainRouter';
import "./App.css"
function App() {
  return (
    <div className="con" >
      <Nav_bar />
      <MainRouter />
       <footer>
      <Footer /></footer> 
    </div>
  );
}

export default App; 
