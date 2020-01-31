import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Context as CartContext} from '../../../contexts/TestCartContext';

import {ShoppingCartItem} from '../../index';
const ShoppingCartItems = ({ setCartModal }) => {
  const { state, getCartItems } = useContext(CartContext);
  console.log('state in shopping cart items', state);
  const cart = state.cart;
  const customerId = localStorage.getItem('user_id'); 
  const handleKeepShopping = (event) => {
    event.preventDefault();
    // console.log('Keep shopping clicked');
    setCartModal(false);
  };
  useEffect(() => {
    getCartItems(customerId);
  }, [])
  return (
    <>
      <p>Your Cart</p>
      {cart && cart.items && cart.items.map(product => (
        <ShoppingCartItem 
        product={product} 
        key={product.item._id} 
        />
      ))}
      { cart && (<p>Total: {cart.total}</p>)}
      <button onClick={handleKeepShopping}>Keep Shopping</button>
      {/* <button onClick={handleCheckout}>Checkout</button> */}
      {cart && (<Link to={{ pathname: `/orderreview/${cart.cartId}`}}>Checkout</Link>)}
    </>
  )
}

export default ShoppingCartItems;