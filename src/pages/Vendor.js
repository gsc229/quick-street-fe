// ** Vendor customer facing page ** //

import React, { useState } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Menu, Footer, ShoppingCartItems } from '../components/index';

// import About from '../components/Browse/VendorPage/components/About';
// import Products from '../components/Browse/VendorPage/components/Products';
// import Posts from '../components/Browse/VendorPage/components/Posts';
// import Menu from '../components/shared/Menu';
// import Footer from '../components/shared/Footer';
import '../styles/scss/OldcustomerFacingVendorProfile.scss';


const Vendor = props => {
  
  const vendorId = props.match.params.id;

  // console.log('props in vendor view page', props);
  // console.log(props.location.cart);
  // console.log(props.location.setCart);

  return (
    <>
      <nav className="temporary_nav" style={{ color: 'red', textAlign: 'center' }} >
        <h1>Replace Me With Luis's Nav</h1>
        <ShoppingCartItems cart={props.location.cart} />
      </nav>
      <Menu />
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts setCart={props.location.setCart} vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
