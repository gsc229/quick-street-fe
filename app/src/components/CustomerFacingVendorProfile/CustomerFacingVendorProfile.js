import React from 'react';

import About from './About';
import Products from './Products';
import Posts from './Posts';

const CustomerFacingVendorProfile = (props) => {

  const vendorId = props.match.params.id;

  return (
    <>
    <About vendorId={vendorId} />
    <Products vendorId={vendorId} />
    <Posts vendorId={vendorId} />
    </>
  )
}

export default CustomerFacingVendorProfile;