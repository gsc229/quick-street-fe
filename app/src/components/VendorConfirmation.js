import React from 'react';

const VendorConfirmation = (props) => {
  const { email, password, businessName, phoneNumber, streetAddress, city, zipcode } = props.values;

  const cancel = (event) => {
    event.preventDefault();
    props.previousStep();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.values);
    // POST request to backend
  }

  return (

    <div className='confirmation_container'>
      <div className='vendor_confirmation_div'>
        <p className ='vendor_confirmation_title'>Email</p>
        <p className='vendor_confirmation_value'>{email}</p>
      </div>

      <div className='vendor_confirmation_div'>
        <p className ='vendor_confirmation_title'>Password</p>
        <p className='vendor_confirmation_value'>{password}</p>
      </div>
      
      <div className='vendor_confirmation_div'>
        <p className ='vendor_confirmation_title'>Business Name</p>
        <p className='vendor_confirmation_value'>{businessName}</p>
      </div>
      
      <div className='vendor_confirmation_div'>
        <p className ='vendor_confirmation_title'>Phone Number</p>
        <p className='vendor_confirmation_value'>{phoneNumber}</p>
      </div>
      

      {streetAddress.length > 0 && (
        <div className='vendor_confirmation_div'>
          <p className ='vendor_confirmation_title'>Street Address</p>
          <p className='vendor_confirmation_value'>{streetAddress}</p>
        </div>
      )}

      {city.length > 0 && (
        <div className='vendor_confirmation_div address_confirmation'>
          <div className='vendor_city_confirmation'>
            <p className ='vendor_confirmation_title'>City</p>
            <p className='vendor_confirmation_value'>{city}</p>
          </div>
          <div className='vendor_city_confirmation'>
            <p className ='vendor_confirmation_title'>Zipcode</p>
            <p className='vendor_confirmation_value'>{zipcode}</p>
          </div>
        </div>
      )}

      {city.length === 0 && (
        <div className='vendor_confirmation_div'>
        <p className ='vendor_confirmation_title'>Zipcode</p>
        <p className='vendor_confirmation_value'>{zipcode}</p>
      </div> 
      )}

      <div className='vendor_confirmation_div'>
        <button className='cancel_button' onClick={cancel}>Cancel</button>
        <button className='confirm_button' onClick={handleSubmit}>Save</button>
      </div>

    </div>

  )

}

export default VendorConfirmation;