import React, { useState, useEffect } from 'react';

import Map from '../Map';
import axiosWithAuth from '../../utils/axiosWithAuth';
import '../../styling/customerFacingVendorProfile.css';

const About = (props) => { 
  
  const [ vendor, setVendor ] = useState({
    location: {}
  })

  const getVendor = (id) => {
    console.log('getvendor');
    axiosWithAuth()
      .get(`/vendors/${id}`)
      .then(response => {
        // console.log(response);
        setVendor(response.data.data)
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
      <div className='top_section'>
        <p>{vendor.business_name}</p>
        <img src={vendor.vendor_banner} alt='Vendor Banner Image' />
      </div>
      <div>
        <p>Our Bio</p>
        <p>{vendor.description}</p>
        <p>Hours of Operation</p>
        <p>{vendor.days_of_week} - {vendor.hours}</p>
        <p>Contact</p>
        <p>{vendor.phone}</p>
        <p>{vendor.email}</p>
      </div>
      <div>
        <p>Location</p>
        <p>The vendor can be found at {vendor.location.zipcode} area</p>
        <Map zipcode={vendor.location.zipcode} />
      </div>

    </div>
  )

}

export default About;