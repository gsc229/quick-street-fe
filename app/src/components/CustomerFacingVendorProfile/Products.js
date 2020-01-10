import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';
import Product from './Product';

const Products = (props) => { 

  const [ vendorProducts, setVendorProducts ] = useState({
    products: [],
    count: 0
  })

  const getVendorProducts = (id) => {
    axiosWithAuth()
      .get(`/vendors/${id}/products`)
      .then(response => {
        console.log(response);
        setVendorProducts({
          ...vendorProducts,
          products: response.data.data,
          count: response.data.count
        })
      })
      .catch(error => {
        console.log(error); 
      })
  }

  useEffect(() => {
    getVendorProducts(props.vendorId);
  }, [])

  return (
    <div>
      <p>Products</p>
      {vendorProducts.products.map(product => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  )

}

export default Products;