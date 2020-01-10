import React from 'react';

import About from './About';
import Products from './Products';
import Posts from './Posts';
import '../../styling/customerFacingVendorProfile.css';

const CustomerFacingVendorProfile = (props) => {

  const vendorId = props.match.params.id;

  return (
    <div className= 'container'>
      <About vendorId={vendorId} />
      <Products vendorId={vendorId} />
      <Posts vendorId={vendorId} />
    </div>
  )
}

export default CustomerFacingVendorProfile;