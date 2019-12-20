import React from 'react';

const VendorDetails = (props) => {
  const { values, handleChange, nextStep, previousStep} = props;

  const proceed = (event) => {
    event.preventDefault();
    nextStep();
  }

  const cancel = (event) => {
    event.preventDefault();
    previousStep();
  };

  return (
    <div>
      <div>
        <img alt='Signup Image'/>
      </div>
      <div>
        <h1>Great! Let's get you set up.</h1>
        <form>
          <div>
            <label htmlFor='businessName'>Business Name</label>
            <input
              type='text'
              name='businessName'
              id='businessName'
              placeholder='Enter your business name'
              value={values.businessName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Enter your phone number'
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='streetAddress'>Street Address</label>
            <input
              type='text'
              name='streetAddress'
              id='streetAddress'
              placeholder='Enter your street address'
              value={values.streetAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              id='city'
              placeholder='Enter your city'
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='zipcode'>Zipcode</label>
            <input
              type='text'
              name='zipcode'
              id='zipcode'
              placeholder='Enter your zipcode'
              value={values.zipcode}
              onChange={handleChange}
          />
          </div>
          <button onClick={cancel}>Cancel</button>
          <button onClick={proceed}>Next</button>
        </form>
      </div>
    </div>
  )
}

export default VendorDetails;