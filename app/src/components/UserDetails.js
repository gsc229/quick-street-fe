import React from 'react';
import { Link } from 'react-router-dom';

import meditateGirlImg from '../assets/meditate_girl.svg';
import '../styling/registration.css';

const UserDetails = (props) => {
  const proceed = (event) => {
    event.preventDefault();
    props.nextStep();
  }

  const { values, handleChange} = props;

  return (
    <div className='form_container'>
      {/* <div className='signup_image'> */}
      {/* <img src={meditateGirlImg} alt='Sign Up Form' /> */}
      {/* </div> */}
      <div className='form_details'>
      <h1>Create An <br/> Account With <br/> Quick Street</h1>
        <h3>Already have an account? <Link className='link' to="/login">Log In</Link></h3>
        <form>
          <div className='form_input'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              // placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='form_input'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              name='password'
              id='password'
              // placeholder='Please enter a password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <h4>Are you a vendor?</h4>
          <div className='form_input_radio'>
            <div className='radio_buttons'>
              <input 
                className='checkbox'
                type='radio' 
                name='role' 
                id='customer' 
                value='customer'
                // checked={values.role === 'customer'}
                onChange={handleChange}
              />
              <label htmlFor='customer'>Customer</label>
            </div>
            <div className='radio_buttons'>
              <input
                className='checkbox'
                type='radio' 
                name='role' 
                id='vendor'
                value='vendor'
                // checked={values.role === 'vendor'}
                onChange={handleChange}
              />
              <label htmlFor='vendor'>Vendor</label>
            </div>  
          </div>
          <button className='button' onClick={proceed}>Next</button>
        </form>
      </div>
    </div>
  )
}

export default UserDetails;