import React from 'react';

import '../styling/vendorsNearby.css';
import rectangle from '../assets/rectangle.png';
import placeholder from '../assets/placeholder.png';

const VendorsNearby = (props) => {
  // console.log(props);
  const noZipcodeArray = [1, 2, 3, 4, 5];
  
  return (
    <>
      {props.zipcode === '' ? (
        <>
          <p>Your results will display here once you have set a location</p>
          <div className='vendor_div_empty'>
            {noZipcodeArray.map((value, index) => (
              <div className='vendor_details_div_empty' key={index}>
                <img className='placeholder_image' src={rectangle} />
                <img className='placeholder_text' src={placeholder} />
                <img className='placeholder_text' src={placeholder} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Showing all ({props.vendors.count})</p>
      ) }
      <div className='vendors_div'>
        {props.vendors.vendorDetails.map(vendor => (
          <div className='vendor_details_div' onClick={() => props.history.push(`/browse/${vendor._id}`)} key={vendor._id} >
          <img className='vendor_banner_image' src={vendor.vendor_banner} alt='Banner Image'></img>
          <p className='vendor_name'>{vendor.business_name}</p>
          <p className='vendor_category'>{vendor.vendor_category}</p>
          </div>
        ))}
      </div>
    </>
  )
} 

export default VendorsNearby;