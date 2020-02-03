import React, { useEffect, useContext } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { OrderReviewItem } from '../components/index';
import { Context as CartContext } from '../contexts/TestCartContext';
import review from '../styles/scss/review.module.scss';
import {Nav} from '../components/index';
import StripeCheckoutButton from './StripeCheckoutButton';


const OrderReview = (props) => {

  const customerId = localStorage.getItem('user_id');
  const { state, getCartItems } = useContext(CartContext);
  const cart = state.cart;
  
  useEffect(() => {
    getCartItems(customerId);
  }, [])
  
  return (
    <>
    <div className={review.navbar}>
    <Nav />
    </div>
    
     <div className={review.container}>
      <p>Reviewing My Cart</p>
      {cart && cart.items && cart.items.map(product => 
        <OrderReviewItem 
          product={product} 
          key={product.item._id}
        />
      )}
      <p>Total $ {cart.total}</p>
      <button onClick={props.history.goBack}>Cancel</button>
      {/* <button>Confirm</button> */}
      {/* need to get price state */}
      <StripeCheckoutButton  price='10' customerId={customerId} />  
      </div>
    </>
  )
};

export default OrderReview;