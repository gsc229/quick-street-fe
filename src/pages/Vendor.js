import React, { useState, useEffect, useContext } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Footer, ShoppingCartItems, Modal } from '../components/index';

import '../styles/scss/OldcustomerFacingVendorProfile.scss';

// stlyes
import profile from "../styles/scss/profile.module.scss";

const Vendor = props => {
  const customerId = localStorage.getItem("user_id");

const Vendor = (props) => {

  const vendorId = props.match.params.id;
  const [ cartModal, setCartModal ] = useState(false);
  
  return (
    <>
      <p onClick={() => setCartModal(true)}>Shopping Cart</p>
			<Modal showModal={cartModal}>
        <ShoppingCartItems setCartModal={setCartModal}/>
			</Modal>

      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};
}
export default Vendor;
