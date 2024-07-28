import React from 'react';
import './App.css';
import Tavoli from './Tavoli';
import Bevande from './Bevande';
import Carrello from './Carrello';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <h1>Benvenuto al Ristorante</h1>
        </header>
        <div className="App-content">
          <Tavoli />
          <Bevande />
          <Carrello />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
