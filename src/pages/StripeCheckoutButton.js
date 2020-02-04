import React, { useContext, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axiosWithAuth from '../utils/axiosWithAuth';
import {Context as CartContext} from '../../../contexts/TestCartContext';

const StripeCheckoutButton = ({ price, customerId }) => {
  const { state, getCartItems } = useContext(CartContext);
  
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_h1PiAqFdpVJpFn9xYKA1JEX7008fXbJlqI';
  
    const onToken = token => {
      console.log(token);
      //alert('Payment Succesful!');
      axiosWithAuth()
        .post(`/customers/${customerId}/cart/payment`, {
            totalPrice: priceForStripe,
            token: token,
            currency: 'usd'
        }).then(res => {
            console.log(res)
            // clear cart state
           
            // show confirmation 
        }).catch(err => {
            console.log(err)
        })

    };

    return (
        <StripeCheckout
          label='Pay Now'
          name='Market Avenue' // change to vendor?
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
    };
    
    export default StripeCheckoutButton;
   