import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const ShoppingCartItem = ({ cartItem, setCartItem, customerId }) => {
  console.log(cartItem);
  const [ editingQty, setEditingQty ] = useState(false);
  const [ quantity, setQuantity ] = useState('');
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const editCartItem = () => {
    setEditingQty(false);
    axiosWithAuth()
    .put(`/customers/${customerId}/cart/addtocart`, {quantity, productId: cartItem.item._id})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  };

  const deleteCartItem = (productId) => {
    axiosWithAuth()
    .delete(`/customers/${customerId}/cart/deleteitem/${productId}`)

  };

  return (

    // <div key={cartItem.item._id}>
    //   <p>{cartItem.item.name}</p>
    //   {editingQty ? (
    //     <input
    //       name='quantity'
    //       onChange={handleQuantityChange}
    //       value={quantity}
    //     />
    //   ) : (<p>{cartItem.quantity}</p>)}
    //   <p>{cartItem.price}</p>
    //   {editingQty ? (<i className='fa fa-check-circle' onClick={editCartItem}>Change Quantity</i>) : (<i className='fa fa-edit' onClick={() => setEditingQty(true)}>Edit</i>)}
    //   <i className='fa fa-times-circle' onClick={() => deleteCartItem(cartItem.item._id)}>Delete</i>
    // </div>
    <h1>Shopping Cart Item</h1>

  )
}

export default ShoppingCartItem;
