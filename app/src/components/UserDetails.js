import React from 'react';

import meditateGirlImg from '../assets/meditate_girl_1.jpg';

const UserDetails = (props) => {
  const proceed = (event) => {
    event.preventDefault();
    props.nextStep();
  }

  const { values, handleChange} = props;

  return (
    <div className='formContainer'>
      <div className='signupImage'>
        {/* <img src={meditateGirlImg} alt='Sign Up Form' /> */}
      </div>
      <div className='formDetails'>
      <h1>Create an account with Quick Street</h1>
        <h6>Already have an account. Log In</h6>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              name='password'
              id='password'
              placeholder='Please enter a password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <h3>Are you a customer or vendor?</h3>
          <div>
            <label htmlFor='customer'>Customer</label>
            <input 
              type='radio' 
              name='role' 
              id='customer' 
              value='customer'
              // checked={values.role === 'customer'}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='vendor'>Vendor</label>
            <input 
              type='radio' 
              name='role' 
              id='vendor'
              value='vendor'
              // checked={values.role === 'vendor'}
              onChange={handleChange}
            />
          </div>  
          <button onClick={proceed}>Next</button>
        </form>
      </div>
    </div>
  )
}

export default UserDetails;