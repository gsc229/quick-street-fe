// ** Vendor customer facing page ** //

import React from 'react';
import {
  ViewAboutVendor,
  ViewVendorProducts,
  ViewVendorPosts,
  Nav,
  Footer
} from '../components/index';

// import About from '../components/Browse/VendorPage/components/About';
// import Products from '../components/Browse/VendorPage/components/Products';
// import Posts from '../components/Browse/VendorPage/components/Posts';
// import Footer from '../components/shared/Footer';
import '../styles/scss/customerFacingVendorProfile.scss';

const Vendor = props => {
  const vendorId = props.match.params.id;
  console.log('props in vendor view page', props);

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
