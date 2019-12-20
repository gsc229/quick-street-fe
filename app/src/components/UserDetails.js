import React from 'react';

const UserDetails = (props) => {
  const proceed = (event) => {
    event.preventDefault();
    props.nextStep();
  }

  const { values, handleChange} = props;

  return (
    <div>
    <h1>Create an account with Quick Street</h1>
      <h6>Already have an account. Log In</h6>
      <form>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input 
          type='password'
          name='password'
          id='password'
          placeholder='Please enter a password'
          value={values.password}
          onChange={handleChange}
        />
        Are you a customer or vendor?
        <label htmlFor='customer'>Customer</label>
        <input 
          type='radio' 
          name='role' 
          id='customer' 
          value='customer'
          // checked={values.role === 'customer'}
          onChange={handleChange}
        />
        <label htmlFor='vendor'>Vendor</label>
        <input 
          type='radio' 
          name='role' 
          id='vendor'
          value='vendor'
          // checked={values.role === 'vendor'}
          onChange={handleChange}
        />
        <button onClick={proceed}>Next</button>
      </form>
    </div>
  )
}

export default UserDetails;