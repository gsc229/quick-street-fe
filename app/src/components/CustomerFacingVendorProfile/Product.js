import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';

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
    <div key={props.product._id}>
      <img src={image} alt='Product Image' />
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
    </div>
  )
}

export default Product;

