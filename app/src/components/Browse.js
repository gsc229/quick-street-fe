import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import Map from './Map';
import VendorsNearby from './VendorsNearby';

const Browse = () => {
  const [ zipcode, setZipcode ] = useState('');
  const [ vendors, setVendors ] = useState({
    count: '',
    vendorDetails: []
  });
  const [ customerZip, setCustomerZip ] =  useState('');
  
  const handleChange = (event) => {
    setCustomerZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .get(`/vendors/radius/${customerZip}/5`)
      .then(response => {
        console.log(response);
        setVendors({
          ...vendors,
          count: response.data.count,
          vendorDetails: response.data.data
        })
        setZipcode(customerZip)
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div>
      {zipcode === '' && (
        <p>Enter a location to start browsing</p>
      )}
      {zipcode !== '' && (
        <p>Your results for</p>
      )}
      <p></p>
      <form onSubmit={handleSubmit}>
        <input
          name='zipcode'
          placeholder='zip code'
          onChange={handleChange}
          value={customerZip}
        />
      </form>
      <Map zipcode={zipcode} vendors={vendors} />
      <VendorsNearby zipcode={zipcode} vendors={vendors} />
    </div>
  )
}

export default Browse;