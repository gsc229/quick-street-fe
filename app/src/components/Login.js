import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
  const [ credentials, setCredentials ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
    // implement post request once backend is deployed
  }

  return(
    <div>
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
        <button>Login</button>
      </form>
    </div>
  )
  
}

export default Login;