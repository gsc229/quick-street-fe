import React, { Component } from 'react';

import UserDetails from './UserDetails';
import VendorDetails from './VendorDetails';

class Register extends Component {
  state = {
    step: 1,    
    email: '',
    password: '',
    role: '',
    businessName: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipcode: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { email, password, role, businessName, phoneNumber, streetAddress, city, zipcode } = this.state;
    const values = { email, password, role, businessName, phoneNumber, streetAddress, city, zipcode };

    switch(step) {
      case 1: 
        return (
          <UserDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2: 
      return (
        <VendorDetails 
          previousStep={this.previousStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    }  
  } 
}     
    
export default Register;