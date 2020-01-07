import React from 'react';

const VendorsNearby = (props) => {
  return (
    <>
    <h1>Vendors</h1>
    {props.vendors.vendorDetails.map(vendor => (
      <div className='vendor_div'>
      <img src={vendor.vendor_banner} alt='Banner Image'></img>
      <p>{vendor.business_name}</p>
      <p>{vendor.description}</p>
      </div>
    ))}
    </>
  )
} 

export default VendorsNearby;