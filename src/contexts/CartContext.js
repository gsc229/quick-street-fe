import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [ cart, setCart ] = useState([]);

  const addToCart = (item) => {
    // console.log(item);
    setCart(cart.push(item));
  }

  const removeFromCart = (item) => {
    // console.log(item);
    setCart(cart.filter(cartItem => item.id !== cartItem.id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )

}