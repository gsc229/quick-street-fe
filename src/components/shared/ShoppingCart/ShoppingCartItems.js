import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartItem } from '../../index';

const ShoppingCartItems = ({ cart, setCartModal }) => {
  
  const handleKeepShopping = (event) => {
    event.preventDefault();
    // console.log('Keep shopping clicked');
    setCartModal(false);
  };

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