import React, { useState } from 'react';

import UserDetails from './UserDetails';
import VendorDetails from './VendorDetails';
import VendorConfirmation from './VendorConfirmation';
import CustomerConfirmation from './CustomerConfirmation';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    step: 3,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    role: '',
    roleError: '',
    businessName: '',
    businessNameError: '',
    phoneNumber: '',
    phoneNumberError: '',
    streetAddress: '',
    city: '',
    zipcode: '',
    zipcodeError: ''
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
      [event.target.name]: event.target.value,
      emailError: '', 
      passwordError: '', 
      roleError: '',
      businessNameError: '',
      phoneNumberError: '',
      zipcodeError: ''
    });
  };

  const userDetails = () => {
    if (userInfo.step === 1) {
      return (
        <UserDetails
          values={userInfo}
          handleChange={handleChange}
          nextStep={nextStep}
          setUserInfo={setUserInfo}
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
          setUserInfo={setUserInfo}
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