import React from 'react';

import About from './About';
import Products from './Products';
import Posts from './Posts';
import Menu from '../Menu';
import Footer from '../Footer';
import '../../styling/customerFacingVendorProfile.css';

const CustomerFacingVendorProfile = (props) => {

  const vendorId = props.match.params.id;

  return (
    <>
    <Menu />
      <About vendorId={vendorId} />
      <Products vendorId={vendorId} />
      <Posts vendorId={vendorId} />
    <Footer />
    </>
  )
}

export default CustomerFacingVendorProfile;