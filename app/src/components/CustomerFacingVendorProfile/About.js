import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';

const About = (props) => { 

  const [ vendor, setVendor ] = useState({
    info: ''
  })

  const getVendor = (id) => {
    axiosWithAuth()
      .get(`/vendors/${id}`)
      .then(response => {
        // console.log(response);
        setVendor({
          info: response.data.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getVendor(props.vendorId);
  }, [])
  
  return (
    <div>
      <div>
        <p>{vendor.info.business_name}</p>
        <img src={vendor.info.vendor_banner} alt='Vendor Banner Image' />
      </div>
      <div>
        <p>Our Bio</p>
        <p>{vendor.info.description}</p>
        <p>Hours of Operation</p>
        <p>{vendor.info.days_of_week} - {vendor.info.hours}</p>
        <p>Contact</p>
        <p>{vendor.info.phone}</p>
        <p>{vendor.info.email}</p>
      </div>
      <div>  
        <p>Location</p>
        <p>The vendor can be found at {vendor.info.zipcode} area</p>
      </div>
    </div>
  )

}

export default About;