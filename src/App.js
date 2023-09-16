import React from 'react';
import Payments from '../src/components/Payments';
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Cart />
      <Payments />
    </div>
  );
}

export default App;