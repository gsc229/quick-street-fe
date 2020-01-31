import React, { useState, useEffect } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Footer, ShoppingCartItems, Modal } from '../components/index';
import axiosWithAuth from '../utils/axiosWithAuth';
import '../styles/scss/OldcustomerFacingVendorProfile.scss';
// stlyes
import profile from '../styles/scss/profile.module.scss';


const Vendor = (props) => {
  const vendorId = props.match.params.id;
	console.log('props in vendor view page', props);
  const customerId = localStorage.getItem('user_id');
  const [ cartModal, setCartModal ] = useState(false);
  const [cart, setCart] = useState(props.location.cart);

  useEffect(() => {
    axiosWithAuth()
      .get(`customers/${customerId}/cart`)
      .then(response => {
        // console.log(response);
        setCart({
          ...cart, 
          items: response.data.data.items,
          total: response.data.data.total,
          cartId: response.data.data._id
        })
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])

  return (
    <>
      <p onClick={() => setCartModal(true)}>Shopping Cart</p>
			<Modal showModal={cartModal}>
        <ShoppingCartItems cart={cart} setCartModal={setCartModal}/>
			</Modal>
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts cart={cart} setCart={setCart} vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      <Footer />
    </>
  );
};

export default Vendor;
