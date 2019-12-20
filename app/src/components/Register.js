import React, { useState } from 'react';

import UserDetails from './UserDetails';
import VendorDetails from './VendorDetails';
import VendorConfirmation from './VendorConfirmation';
import CustomerConfirmation from './CustomerConfirmation';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    step: 1,
    email: '',
    password: '',
    role: '',
    businessName: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipcode: ''
  });

  const nextStep = () => {
    const { step } = userInfo;
    setUserInfo({
      ...userInfo,
      step: step + 1
    });
  };

  const previousStep = () => {
    const { step } = userInfo;
    setUserInfo({
      ...userInfo, 
      step: step - 1
    });
  };

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    })
  };

  const userDetails = () => {
    if (userInfo.step === 1) {
      return (
        <UserDetails
          values={userInfo}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    }
  }

  const vendorDetails = () => {
    if (userInfo.step === 2 && userInfo.role === 'vendor') {
      return (
        <VendorDetails 
          values={userInfo}
          handleChange={handleChange}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )
    }
    
  }

  const vendorConfirmation = () => {
    if (userInfo.step === 3 ) {
      return (
        <VendorConfirmation
          values={userInfo}
          previousStep={previousStep}
        />
      )
    }
  };

  const customerConfirmation = () => {
    if (userInfo.step === 2 && userInfo.role === 'customer') {
      return (
        <CustomerConfirmation
          values={userInfo}
          previousStep={previousStep}
        />
      )
    }
  };

  return (
    <>
      {userDetails()}
      {vendorDetails()}
      {vendorConfirmation()}
      {customerConfirmation()}
    </>
  )

}

export default Register;