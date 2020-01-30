import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { OrderReviewItem } from '../components/index';

const OrderReview = (props) => {

  const customerId = localStorage.getItem('user_id');
  console.log(props);

  const [ cart, setCart ] = useState({
    items: []
  });

  const getOrderReviewCart = () => {
    axiosWithAuth()
    .get(`/customers/${customerId}/cart`)
    .then(response => {
      // console.log(response);
      setCart({
				...cart, 
				items: response.data.data.items,
				total: response.data.data.total,
				cartId: response.data.data._id
			})
    })
    .catch(error => {
      console.log(error.response);
    })
  }

  useEffect(() => {
    getOrderReviewCart();
  }, [])
  

  return (
    <>
      <p>Reviewing My Cart</p>
      {cart && cart.items && cart.items.map(product => 
        <OrderReviewItem 
          product={product} 
          setCart= {setCart} 
          customerId={customerId} 
          getOrderReviewCart={getOrderReviewCart} 
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