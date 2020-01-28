// ** Vendor customer facing page ** //

import React, { useState } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Menu, Footer } from '../components/index';

// stlyes
import profile from '../styles/scss/profile.module.scss';

const Vendor = props => {
  const [cart, setCart] = useState([{ item: {} }]);
  const vendorId = props.match.params.id;
  console.log('props in vendor view page', props);

  return (
    <div>
      {/* NAVBAR WILL NEED CART STATE */}
      <nav className="temporary_nav" style={{ color: 'red', textAlign: 'center' }} >
        <h1>Replace Me With Luis's Nav</h1>
        <h4>Mapping over shopping cart items</h4>
        {cart.map(item => (
          <>
            {console.log(item['item']['name'])}
            <h1>{item.item.name}</h1>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </>
        ))}

      </nav>
      <div className={profile.container}>
      <ViewAboutVendor vendorId={vendorId} />
      <ViewVendorProducts setCart={setCart} vendorId={vendorId} />
      <ViewVendorPosts vendorId={vendorId} />
      {/* <button onClick={() => props.history.goBack()}>Back</button> */}
      </div>
      <Footer />
      </div>
  );
};

export default Vendor;
