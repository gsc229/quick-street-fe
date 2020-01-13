import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';
import '../../styling/customerFacingVendorProfile.css';

const Product = (props) => {

  const [ image, setImage ] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get(`/products/${props.product._id}/product-images`)
      .then(response => {
        // console.log(response);
        setImage(response.data.data[0].secure_url);
      })
      .catch(error => {
        console.log(error);
      })
  })

  return (
    <div className='product' key={props.product._id}>
      <img className='product_image' src={image} alt='Product Image' />
      <p className='product_name'>{props.product.name}</p>
      <p className='product_price'>${props.product.price}</p>
    </div>
  )
}

export default Product;

