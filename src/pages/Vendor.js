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

  // console.log('props in vendor view page', props);
  // console.log(props.location.cart);
  // console.log(props.location.setCart);
  console.log(props);
  console.log(props.location.getCartItems);

  return (
    <>
      <p onClick={() => setCartModal(true)}>Shopping Cart</p>
			<Modal showModal={cartModal}>
        <i
          onClick={() => setCartModal(false)}
          className="fa fa-times close_x">
        </i>
        <ShoppingCartItems cart={props.location.cart} setCart={props.location.setCart} cartModal={props.location.cartModal} setCartModal={props.location.setCartModal}/>
			</Modal>
      <Menu />
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts cart={props.location.cart} setCart={props.location.setCart} getCartItems={props.location.getCartItems} vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
