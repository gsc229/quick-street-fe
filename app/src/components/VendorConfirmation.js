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
    <>
      <div>
        <h4>Email</h4>
        <h6>{email}</h6>

        <h4>Password</h4>
        <h6>{password}</h6>

        <h4>Business Name</h4>
        <h6>{businessName}</h6>

        <h4>Phone Number</h4>
        <h6>{phoneNumber}</h6>

        {streetAddress.length > 0 && (
          <>
            <h4>Street Address</h4>
            <h6>{streetAddress}</h6>
          </>
        )
        }

        {city.length > 0 && (
          <>
            <h4>City</h4>
            <h6>{city}</h6>
          </>
        )
        }

        <h4>Zipcode</h4>
        <h6>{zipcode}</h6>

      </div>

      <button onClick={handleSubmit}>Confirm</button>
      <button onClick={cancel}>Cancel</button>  

    </>
  )

}

export default VendorConfirmation;