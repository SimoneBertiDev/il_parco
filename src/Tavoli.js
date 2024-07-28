import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const tavoli = Array.from({ length: 10 }, (_, i) => ({ numero: i + 1 }));

function Tavoli() {
  const { addTavolo } = useContext(CartContext);

  return (
    <div className="column">
      <h2>Lista dei Tavoli</h2>
      {tavoli.map((tavolo) => (
        <button key={tavolo.numero} className="item-button" onClick={() => addTavolo(tavolo.numero)}>
          Tavolo {tavolo.numero}
        </button>
      ))}
    </div>
  );
}

export default Tavoli;
