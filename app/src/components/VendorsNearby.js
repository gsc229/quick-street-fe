import React from 'react';
import {Link} from 'react-router-dom';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

import '../styling/vendorsNearby.css';
import rectangle from '../assets/rectangle.png';
import placeholder from '../assets/placeholder.png';

const VendorsNearby = (props) => {
  // console.log(props);
  const noZipcodeArray = [1, 2, 3, 4, 5, 6];
  
  return (
    <>
      {props.zipcode === '' ? (
        <>
          <p className='result_para'>Your results will display here once you have set a location</p>
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

        <p className='vendor_count'>Showing all ({props.vendors.count})</p>
      ) }
      <div className='vendors_div'>
        {props.vendors.vendorDetails.map(vendor => (
          <div className='vendor_details_div' key={vendor._id} >
          <CloudinaryContext cloudName='quickstlabs' >
            <Image publicId={vendor.vendor_banner} >
              <Transformation height='160' width='192'crop='fill' />
            </Image>
          </CloudinaryContext>
          {/* <img className='vendor_banner_image' src={vendor.vendor_banner} alt='Banner Image'></img> */}
          <p className='vendor_name'>{vendor.business_name}</p>
          <p className='vendor_category'>{vendor.vendor_category}</p>
          <Link className='view_vendor' onClick={() => props.history.push(`/browse/${vendor._id}`)}>View</Link>
          </div>
        ))}
      </div>
    </>
  )
} 

export default VendorsNearby;