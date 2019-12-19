import React, { Component } from 'react';

class VendorDetails extends Component {
  cancel = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.values);
    // post request to de done after backend is deployed
  }

  render () {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Great! Let's get you set up.</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='businessName'>Business Name</label>
          <input
            type='text'
            name='businessName'
            id='businessName'
            placeholder='Enter your business name'
            value={values.businessName}
            onChange={handleChange}
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='Enter your phone number'
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor='streetAddress'>Street Address</label>
          <input
            type='text'
            name='streetAddress'
            id='streetAddress'
            placeholder='Enter your street address'
            value={values.streetAddress}
            onChange={handleChange}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='Enter your city'
            value={values.city}
            onChange={handleChange}
          />
          <label htmlFor='zipcode'>Zipcode</label>
          <input
            type='text'
            name='zipcode'
            id='zipcode'
            placeholder='Enter your zipcode'
            value={values.zipcode}
            onChange={handleChange}
          />
          <button onClick={this.cancel}>Cancel</button>
          <button>Confirm</button>
        </form>
      </div>
    )
  }
  

}

export default VendorDetails;