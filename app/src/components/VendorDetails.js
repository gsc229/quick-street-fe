import React from 'react';

const VendorDetails = (props) => {
  const { values, handleChange, nextStep, previousStep, setUserInfo } = props;

  const proceed = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(values);
      nextStep();
    }
  }

  const validate = () => {
    let businessNameError = '';
    let phoneNumberError = '';
    let zipcodeError = '';

    if(!values.businessName) {
      businessNameError = 'Business name required';
    }

    if (!values.phoneNumber) {
      phoneNumberError = 'Phone number required';
    }

    if (!values.zipcode) {
      zipcodeError = 'Zipcode required';
    }
    
    if(businessNameError || phoneNumberError || zipcodeError ) {
      setUserInfo({
        ...values,
        businessNameError,
        phoneNumberError,
        zipcodeError
      })
      return false;
    }

    return true;
  }


  const cancel = (event) => {
    event.preventDefault();
    previousStep();
  };

  return (
    <div className="main_container">
    <div className='form_container'>
      {/* <div>
        <img alt='Signup Image'/>
      </div> */}
      <div className='form_details_reg'>
        <h1>Great! Let's get you set up.</h1>
        <form>
          <div className='form_input_vendor_details'>
            <label htmlFor='businessName'>Business Name</label>
            <input
              type='text'
              name='businessName'
              id='businessName'
              // placeholder='Enter your business name'
              value={values.businessName}
              onChange={handleChange}
            />
            <p className='errorMessage'>
                {values.businessNameError}
            </p>
          </div>
          <div className='form_input_vendor_details'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              // placeholder='Enter your phone number'
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <p className='errorMessage'>
                {values.phoneNumberError}
            </p>
          </div>
          <div className='form_input_vendor_details'>
            <label htmlFor='streetAddress'>Street Address</label>
            <textarea
              type='text'
              name='streetAddress'
              id='streetAddress'
              // placeholder='Enter your street address'
              value={values.streetAddress}
              onChange={handleChange}
            />
          </div>
          <div className='form_input_address'>
            <div className='form_input_city'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                id='city'
                // placeholder='Enter your city'
                value={values.city}
                onChange={handleChange}
              />
            </div>
            <div className='form_input_city'>
              <label htmlFor='zipcode'>Zipcode</label>
              <input
                type='text'
                name='zipcode'
                id='zipcode'
                // placeholder='Enter your zipcode'
                value={values.zipcode}
                onChange={handleChange}
              />
              <p className='errorMessage'>
                {values.zipcodeError}
              </p>
            </div>
          </div>
            
        
          <button className='cancel_button' onClick={cancel}>Cancel</button>
          <button className='confirm_button' onClick={proceed}>Next</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default VendorDetails;