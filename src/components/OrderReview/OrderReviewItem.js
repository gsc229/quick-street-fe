import React, { useState, useEffect, useContext } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

import axiosWithAuth from '../../utils/axiosWithAuth';
import { Context as CartContext } from '../../contexts/TestCartContext';

const OrderReviewItem = ({ product }) => {

  const customerId = localStorage.getItem('user_id');
  const { updateCartItem, deleteCartItem } = useContext(CartContext);
  const [ vendor, setVendor ] = useState('');

  const [ quantity, setQuantity ] = useState(product.quantity);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const editCartItemQuantity = (event) => {
    event.preventDefault();
    updateCartItem({
      productId: product.item._id,
      quantity,
      customerId
    })
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
      {product.item.product_image && (
        <CloudinaryContext cloudName="quickstlabs">
          <Image publicId={product.item.product_image.thumbnail_url}>
            <Transformation gravity="center" height="318" width="1062" crop="fill" />
          </Image>
        </CloudinaryContext>
      )}
      <p>{product.item.name}</p>
      
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
      <button onClick={() => deleteCartItem({productId : product.item._id, customerId})}>Remove Item</button>

    </>
  )

};

export default OrderReviewItem;