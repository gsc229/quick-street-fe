import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { CartContext } from '../../../contexts/CartContext';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { ShoppingCartItem } from '../../index';


const ShoppingCartItems = () => {
  const userContext = useContext(UserContext); 
  // const cartContext = useContext(CartContext);

  const [ cartItems, setCartItems ] = useState([{
    item: {}
  }])
  const [ total, setTotal ] = useState('');
  const [ cartId, setCartId ] = useState('');

  const customerId = userContext.user.userId;

  console.log(cartItems);

  const deleteAllCartItems = () => {
    axiosWithAuth()
    .delete(`/cart/${cartId}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });

  };

  useEffect(() => {
    if (customerId) {
      axiosWithAuth()
      .get(`/customers/${customerId}/cart`)
      .then(response => {
        console.log(response);
        setCartItems(response.data.data.items);
        setTotal(response.data.data.total);
        setCartId(response.data.data._id);

      })
      .catch(error => {
        console.log(error.response);
      })
    } 
    // else {
    //   const cartData = JSON.parse(localStorage.getItem('cart'));
    //   console.log(cartData);
    //   setCartItems(cartData.items)
    // }
  }, [])

  return (
    <>
      <h1>Shopping Cart Items</h1>
      {cartItems && cartItems.map(cartItem => (
        <ShoppingCartItem cartItem={cartItem} setCartItems={setCartItems} customerId={customerId} 
        // key={cartItem.item._id} 
        />
      ))}
      <p>Total: {total}</p>
      <button onClick={deleteAllCartItems}>Delete Cart Items</button>
    </>
  )
}

export default ShoppingCartItems;