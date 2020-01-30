import React, { useState, useEffect } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

import axiosWithAuth from '../../utils/axiosWithAuth';

const OrderReviewItem = ({ product, setCart, customerId, getOrderReviewCart }) => {

  const [ vendor, setVendor ] = useState('');

  const [ quantity, setQuantity ] = useState(product.quantity);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const editCartItemQuantity = (event) => {
    event.preventDefault();
    axiosWithAuth()
    .put(`/customers/${customerId}/cart/addtocart`, {quantity, productId: product.item._id})
    .then(response => {
      console.log(response);
      getOrderReviewCart();
      
    })
    .catch(error => {
      console.log(error);
    })
  };

  const deleteCartItem = (productId) => {
    axiosWithAuth()
    .delete(`/customers/${customerId}/cart/deleteitem/${productId}`)
    .then(response => {
      console.log(response);
      getOrderReviewCart();
    })
    .catch(error => {
      console.log(error.response);
    });

  };

  useEffect(() => {
    axiosWithAuth()
    .get(`/vendors/${product.item.vendor}`)
    .then(response => {
      // console.log(response);
      setVendor(response.data.data.business_name);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])


  return (
    <>
      {/* <CloudinaryContext cloudName="quickstlabs">
        <Image publicId={product.item.product_image.thumbnail_url}>
          <Transformation gravity="center" height="318" width="1062" crop="fill" />
        </Image>
      </CloudinaryContext> */}
      <p>{product.item.name}</p>
      <p>{vendor}</p>
      <p>$ {product.item.price}</p>
      <form onSubmit={editCartItemQuantity}>
        <label>Quantity</label>
        <input 
          name='quantity'
          type='number'
          value={quantity}
          onChange={handleQuantityChange}
        />
      </form>
      <button onClick={() => deleteCartItem(product.item._id)}>Remove Item</button>
    </>
  )

};

export default OrderReviewItem;