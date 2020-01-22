// ** Vendor customer facing page ** //

import React from 'react';
import {ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Menu, Footer } from '../components/index';

// import About from '../components/Browse/VendorPage/components/About';
// import Products from '../components/Browse/VendorPage/components/Products';
// import Posts from '../components/Browse/VendorPage/components/Posts';
// import Menu from '../components/shared/Menu';
// import Footer from '../components/shared/Footer';
import '../styles/scss/customerFacingVendorProfile.scss';


const Vendor = props => {
  const vendorId = props.match.params.id;

  return (
    <>
      <Menu />
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
