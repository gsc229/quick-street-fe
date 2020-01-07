import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import Map from './Map';

const Browse = () => {
  const [ zipcode, setZipcode ] = useState('02143');
  const [ vendors, setVendors ] = useState({});
  const [ customerZip, setCustomerZip ] =  useState('');
  
  const handleChange = (event) => {
    setCustomerZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .get(`/vendors/radius/${customerZip}/5`)
      .then(response => {
        // console.log(response);
        setVendors({
          response
        })
        setZipcode(customerZip)
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='zipcode'
          placeholder='zip code'
          onChange={handleChange}
          value={customerZip}
        />
      </form>
      <Map zipcode={zipcode} vendors={vendors} />
    </div>
  )
}


export default Browse;