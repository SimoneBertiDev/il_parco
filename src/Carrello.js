import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Carrello() {
  const { cart } = useContext(CartContext);

  const totale = cart.bevande.reduce((sum, bevanda) => sum + bevanda.prezzo, 0);

  return (
    <div className="column">
      <h2>Carrello</h2>
      {cart.tavolo && <p>Tavolo {cart.tavolo}</p>}
      {cart.bevande.length > 0 ? (
        <>
          <ul>
            {cart.bevande.map((bevanda, index) => (
              <li key={index}>{bevanda.nome} - €{bevanda.prezzo.toFixed(2)}</li>
            ))}
          </ul>
          <div className="totale">
            <p>Totale: €{totale.toFixed(2)}</p>
            <button className="manda-ordine-button">Manda Ordine</button>
          </div>
        </>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </div>
  );
}

export default Carrello;
