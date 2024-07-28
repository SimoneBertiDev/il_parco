import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const bevande = [
  { nome: 'Coca Cola', prezzo: 2.50 },
  { nome: 'Fanta', prezzo: 2.30 },
  { nome: 'Sprite', prezzo: 2.20 },
  { nome: 'Acqua Naturale', prezzo: 1.00 },
  { nome: 'Acqua Frizzante', prezzo: 1.00 },
  { nome: 'Birra', prezzo: 3.50 },
  { nome: 'Vino Rosso', prezzo: 4.00 },
  { nome: 'Vino Bianco', prezzo: 4.00 },
  { nome: 'Succo d\'Arancia', prezzo: 2.00 },
  { nome: 'Succo di Mela', prezzo: 2.00 }
];

function Bevande() {
  const { addBevanda } = useContext(CartContext);

  return (
    <div className="column">
      <h2>Lista delle Bevande</h2>
      {bevande.map((bevanda, index) => (
        <button key={index} className="item-button" onClick={() => addBevanda(bevanda)}>
          {bevanda.nome} - €{bevanda.prezzo.toFixed(2)}
        </button>
      ))}
    </div>
  );
}

export default Bevande;
