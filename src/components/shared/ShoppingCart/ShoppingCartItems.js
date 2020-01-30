import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../contexts/UserContext';
import { ShoppingCartItem } from '../../index';

const ShoppingCartItems = ({ cart, setCartModal }) => {
  
  const userContext = useContext(UserContext); 
  const customerId = userContext.user.userId;

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