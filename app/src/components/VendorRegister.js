import React, { useState } from 'react';

const VendorRegister = () => {
  const [ credentials, setCredentials ] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
  };

  return(
    <div>
      <h1>Create an account with Quick Street</h1>
      <h6>Already have an account. Log In</h6>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email'
          value={credentials.email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input 
          type='password'
          name='password'
          id='password'
          placeholder='Please enter a password'
          value={credentials.password}
          onChange={handleChange}
        />
        Are you a customer or vendor?
        <label htmlFor='customer'>Customer</label>
        <input 
          type='radio' 
          name='role' 
          id='customer' 
          value='customer'
          onChange={handleChange}
        />
        <label htmlFor='vendor'>Vendor</label>
        <input 
          type='radio' 
          name='role' 
          id='vendor'
          value='vendor'
          onChange={handleChange}
        />
        <button>Next</button>
      </form>
    </div>
  )
}

export default VendorRegister;