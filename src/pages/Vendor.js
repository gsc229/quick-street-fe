// ** Vendor customer facing page ** //

import React, { useState } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Menu, Footer, ShoppingCartItems, Modal } from '../components/index';

// import About from '../components/Browse/VendorPage/components/About';
// import Products from '../components/Browse/VendorPage/components/Products';
// import Posts from '../components/Browse/VendorPage/components/Posts';
// import Menu from '../components/shared/Menu';
// import Footer from '../components/shared/Footer';
import '../styles/scss/OldcustomerFacingVendorProfile.scss';


const Vendor = props => {
  
  const vendorId = props.match.params.id;

  const [ cartModal, setCartModal ] = useState(false);
  const [cart, setCart] = useState(props.location.cart);

  return (
    <>
      <p onClick={() => setCartModal(true)}>Shopping Cart</p>
			<Modal showModal={cartModal}>
        <ShoppingCartItems cart={cart} setCartModal={setCartModal}/>
			</Modal>
      <Menu />
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts cart={cart} setCart={setCart} vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
