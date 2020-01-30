import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [ cart, setCart ] = useState({
    products: []
  });

  console.log('products in cart are', cart.products);

  const addToCart = (item) => {
    console.log(item);
    localStorage.setItem('cart', JSON.stringify({ ...cart, products: [...cart.products, item]}));
    const cartItems = localStorage.getItem('cart');
    console.log('cart items in local storage', cartItems);
    setCart({ ...cart, products: [...cart.products, item]});
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