import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/products' Component={Products}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/cart' Component={Cart}/>
      </Routes>
    </>
  );
}

export default App;
