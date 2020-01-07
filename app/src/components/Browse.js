import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import Map from './Map';

const Browse = () => {
  const [ zipcode, setZipcode ] = useState('');
  const [ vendors, setVendors ] = useState({});
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setZipcode(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    axiosWithAuth()
      .get(`/vendors/radius/${zipcode}/5`)
      .then(response => {
        console.log(response);
        setVendors({
          response
        })  
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
          value={zipcode}
        />
      </form>
      <Map zipcode={zipcode} vendors={vendors} />
    </div>
  )
}


export default Browse;