import React, { useState } from 'react';
import {CustomerConfirmation, VendorConfirmation, VendorDetails, RegisterDetails } from '../components/index';
const Register = props => {
  // console.log('Register.js props: ', props);

  const [userInfo, setUserInfo] = useState({
    step: 1,
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

  const handleChange = event => {
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
        <RegisterDetails
          values={userInfo}
          handleChange={handleChange}
          nextStep={nextStep}
          setUserInfo={setUserInfo}
          history={props.history}
        />
      );
    }
  };

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
      );
    }
  };

  const vendorConfirmation = () => {
    if (userInfo.step === 3) {
      return (
        <VendorConfirmation
          values={userInfo}
          previousStep={previousStep}
          history={props.history}
        />
      );
    }
  };

  const customerConfirmation = () => {
    if (userInfo.step === 2 && userInfo.role === 'customer') {
      return (
        <CustomerConfirmation
          values={userInfo}
          previousStep={previousStep}
          history={props.history}
        />
      );
    }
  };

  return (
    <>
      {userDetails()}
      {vendorDetails()}
      {vendorConfirmation()}
      {customerConfirmation()}
    </>
  );
};

export default Register;
