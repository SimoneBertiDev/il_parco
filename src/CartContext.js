import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ tavolo: null, bevande: [] });

  const addTavolo = (tavolo) => {
    setCart((prevCart) => ({ ...prevCart, tavolo }));
  };

  const addBevanda = (bevanda) => {
    setCart((prevCart) => ({
      ...prevCart,
      bevande: [...prevCart.bevande, bevanda]
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addTavolo, addBevanda }}>
      {children}
    </CartContext.Provider>
  );
};
