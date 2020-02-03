// ** Vendor customer facing page ** //

import React, { useState, useEffect, useContext } from 'react';
import {
  ViewAboutVendor,
  ViewVendorProducts,
  ViewVendorPosts,
  Footer,
  ShoppingCartItems,
  Modal,
  Nav
} from '../components/index';
import axiosWithAuth from '../utils/axiosWithAuth';
import '../styles/scss/OldcustomerFacingVendorProfile.scss';

// stlyes
import profile from '../styles/scss/profile.module.scss';

const Vendor = props => {
  const vendorId = props.match.params.id;
  const [cartModal, setCartModal] = useState(false);

  return (
    <>
      <Nav />
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
