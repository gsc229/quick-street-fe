import React, { useEffect, useContext } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { OrderReviewItem } from '../components/index';
import { Context as CartContext } from '../contexts/TestCartContext';

const OrderReview = (props) => {

  const customerId = localStorage.getItem('user_id');
  const { state, getCartItems } = useContext(CartContext);
  const cart = state.cart;
  
  useEffect(() => {
    getCartItems(customerId);
  }, [])
  

  return (
    <>
      <p>Reviewing My Cart</p>
      {cart && cart.items && cart.items.map(product => 
        <OrderReviewItem 
          product={product} 
          key={product.item._id}
        />
      )}
      <p>Total $ {cart.total}</p>
      <button onClick={props.history.goBack}>Cancel</button>
      <button>Confirm</button>
    </>
  )
};

export default OrderReview;