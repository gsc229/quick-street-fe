import React, { useState, useEffect, useContext } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import Product from '../../Profile/Product/Product';

const ShoppingCartItem = ({ cart, setCart, customerId, getCartItems, product }) => {
  // console.log(cartItem);
  // console.log(cart);
  // const [ editingQty, setEditingQty ] = useState(false);
  // const [ quantity, setQuantity ] = useState(cartItem.quantity);
  
  // const handleQuantityChange = (event) => {
  //   setQuantity(event.target.value);
  // }

  // const editCartItem = () => {
  //   setEditingQty(false);
  //   axiosWithAuth()
  //   .put(`/customers/${customerId}/cart/addtocart`, {quantity, productId: cartItem.item._id})
  //   .then(response => {
  //     console.log(response);
  //     getCartItems();
      
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // };

  // const deleteCartItem = (productId) => {
  //   axiosWithAuth()
  //   .delete(`/customers/${customerId}/cart/deleteitem/${productId}`)
  //   .then(response => {
  //     console.log(response);
  //     getCartItems();
  //   })
  //   .catch(error => {
  //     console.log(error.response);
  //   });

  // };

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
    // <h1>Shopping Cart Item</h1>
    <>
      <CloudinaryContext cloudName="quickstlabs">
        <Image publicId={product.item.product_image.thumbnail_url}>
          <Transformation gravity="center" height="318" width="1062" crop="fill" />
        </Image>
      </CloudinaryContext>
      <p>{product.quantity} {product.item.name}</p>
    </>

  )
}

export default ShoppingCartItem;
