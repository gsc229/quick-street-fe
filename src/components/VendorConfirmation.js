import React from 'react';
import register_step3 from '../styles/scss/register_step3.module.scss';
import axiosWithAuth from '../utils/axiosWithAuth';

const VendorConfirmation = props => {
  //   console.log('VendorConfirmation props: ', props);
  const {
    email,
    password,
    businessName,
    phoneNumber,
    streetAddress,
    city,
    zipcode
  } = props.values;

  const cancel = event => {
    event.preventDefault();
    props.previousStep();
  };

  const convertAddress = () => {
    if (streetAddress || city) {
      let address = '';
      address = streetAddress
        .trim()
        .concat(',')
        .concat(city.trim())
        .concat(',')
        .concat(zipcode.trim());
      // console.log(address);
      return address;
    } else {
      return zipcode;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const registerObject = {
      email,
      password,
      business_name: businessName,
      phone: phoneNumber,
      address: convertAddress()
    };

    axiosWithAuth()
      .post('/auth/register', registerObject)
      .then(response => {
        // console.log('POST VendorConfirm res: ', response);
        localStorage.setItem('token', response.data.token);
        props.history.push(`/profile/${response.data.id}`);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div className={register_step3.container}>
      <div className={register_step3.form}>
        <div className={register_step3.top_section}>
          <h5>Email</h5>
          <div>{email}</div>

          <h5>Password</h5>
          <div>{password}</div>
        </div>

        <div className={register_step3.middle_section}>
          <h5>Business Name</h5>
          <div>{businessName}</div>

          <h5>Phone Number</h5>
          <div>{phoneNumber}</div>
        </div>

        {streetAddress.length > 0 && (
          <div className={register_step3.streetAddress}>
            <h5>Street Address</h5>
            <div>{streetAddress}</div>
          </div>
        )}

        {city.length > 0 && (
          <div className={register_step3.city_zip_container}>
            <div className={register_step3.city}>
              <h5>City</h5>
              <div>{city}</div>
            </div>

            <div className={register_step3.zip}>
              <h5>Zipcode</h5>
              <div>{zipcode}</div>
            </div>
          </div>
        )}

        <button className={register_step3.cancel_button2} onClick={cancel}>
          Cancel
        </button>
        <button
          className={register_step3.save_confirm_button}
          onClick={handleSubmit}
        >
          Confirm & Save
        </button>
      </div>
    </div>
  );
};

export default VendorConfirmation;
