import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Context as CartContext} from '../../../contexts/TestCartContext';
import {ShoppingCartItem} from '../../index';

const ShoppingCartItems = ({ setCartModal }) => {
  const { state, getCartItems } = useContext(CartContext);
  // console.log('state in shopping cart items', state);
  const cart = state.cart;
  const customerId = localStorage.getItem('user_id'); 

  useEffect(() => {
    getCartItems(customerId);
  }, [])

  return (
    <React.Fragment>
      {cart && cart.items && cart.items.map(product => (
        <ShoppingCartItem 
        product={product} 
        key={product.item._id} 
        />
      ))}
    
    </React.Fragment>
  )
}

export default ShoppingCartItems;