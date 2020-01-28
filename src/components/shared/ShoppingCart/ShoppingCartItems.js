import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { CartContext } from '../../../contexts/CartContext';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { ShoppingCartItem } from '../../index';


const ShoppingCartItems = ({cart}) => {
  const userContext = useContext(UserContext); 
  // const cartContext = useContext(CartContext);

  const [ cartItems, setCartItems ] = useState([{
    item: {},
  }])
  const [ total, setTotal ] = useState('');
  const [ cartId, setCartId ] = useState('');

  const customerId = userContext.user.userId;

  const deleteAllCartItems = () => {
    axiosWithAuth()
    .delete(`/cart/${cartId}`)
    .then(response => {
      console.log(response);
      getCartItems();
      
    })
    .catch(error => {
      console.log(error.response);
    });

  };

  const getCartItems = () => {
    axiosWithAuth()
    .get(`/customers/${customerId}/cart`)
    .then(response => {
      // console.log(response);
      setCartItems(response.data.data.items);
      setTotal(response.data.data.total);
      setCartId(response.data.data._id);

    })
    .catch(error => {
      console.log(error.response);
      if(error.response.status === 404) {
        setCartItems({error: 'There are no products in your cart'});
      }
      
    })
  }


  useEffect(() => {
    if (customerId) {
      getCartItems();
    } 
    // else {
    //   const cartData = JSON.parse(localStorage.getItem('cart'));
    //   console.log(cartData);
    //   setCartItems(cartData.items)
    // }
  }, [cart])

  console.log(cartItems);


  return (
    <>
      <h1>Shopping Cart Items</h1>
      { cartItems.error && (<p>cartItems.error</p>) }
      {cartItems && cartItems.map(cartItem => (
        <ShoppingCartItem 
        cartItem={cartItem} 
        setCartItems={setCartItems} 
        getCartItems={getCartItems}
        customerId={customerId} 
        key={cartItem.item._id} 
        />
      ))}
      <p>Total: {total}</p>
      <button onClick={deleteAllCartItems}>Delete All Cart Items</button>
    </>
  )
}

export default ShoppingCartItems;