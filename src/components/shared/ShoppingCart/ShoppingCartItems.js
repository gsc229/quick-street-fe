import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { CartContext } from '../../../contexts/CartContext';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { ShoppingCartItem } from '../../index';


const ShoppingCartItems = ({ cart, setCart }) => {
  const userContext = useContext(UserContext); 
  // const cartContext = useContext(CartContext);

  // const [ cartItems, setCartItems ] = useState([{
  //   item: {},
  // }])
  // const [ total, setTotal ] = useState('');
  // const [ cartId, setCartId ] = useState('');

  const customerId = userContext.user.userId;
  // const customerId = localStorage.getItem('userId');
  console.log('The cart is ', cart);

  // const deleteAllCartItems = () => {
  //   axiosWithAuth()
  //   .delete(`/cart/${cartId}`)
  //   .then(response => {
  //     console.log(response);
  //     getCartItems();
      
  //   })
  //   .catch(error => {
  //     console.log(error.response);
  //   });
  // };

  const getCartItems = () => {
    axiosWithAuth()
    .get(`/customers/${customerId}/cart`)
    .then(response => {
      // console.log(response);
      setCart(response.data.data.items);
      // setTotal(response.data.data.total);
      // setCartId(response.data.data._id);

    })
    .catch(error => {
      console.log(error.response);
      // if(error.response.status === 404) {
      //   setCartItems({error: 'There are no products in your cart'});
      // }
      
    })
  }


  // useEffect(() => {
  //   if (customerId) {
  //     getCartItems();
  //   } 
    
  // }, [cart])

  // console.log(cartItems);


  return (
    <>
      <p>Your Cart</p>
      {/* { cartItems.error && (<p>cartItems.error</p>) } */}
      {cart.items && cart.items.map(product => (
        <ShoppingCartItem 
        product={product} 
        // setCartItems={setCartItems}
        cart={cart}
        setCart={setCart}
        getCartItems={getCartItems}
        customerId={customerId} 
        key={product.item._id} 
        />
      ))}
      <p>Total: {cart.total}</p>
      {/* <button onClick={deleteAllCartItems}>Delete All Cart Items</button> */}
      <button>Keep Shopping</button>
      <button>Checkout</button>
    </>
  )
}

export default ShoppingCartItems;