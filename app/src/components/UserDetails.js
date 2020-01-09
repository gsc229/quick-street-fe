import React from 'react';
import { Link } from 'react-router-dom';

import meditateGirlImg from '../assets/meditate_girl.svg';
import '../styling/registration.css';

const UserDetails = (props) => {
  const { values, nextStep, handleChange, setUserInfo } = props;

  const proceed = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(values);
      nextStep();
    }
  }

  const validate = () => {
    let emailError = '';
    let passwordError = '';
    let roleError = '';

    if(!values.email.includes('@')) {
      emailError = 'Invalid email';
    }

    if (values.password.length === 0) {
      passwordError = 'Password required';
    }

    if(values.password.length < 6 && values.password) {
      passwordError = 'Minimum password is 6 characters';
    }

    if (!values.role) {
      roleError = 'Role required';
    }

    if(emailError || passwordError || roleError ) {
      setUserInfo({
        ...values,
        emailError,
        passwordError,
        roleError
      })
      return false;
    }

    return true;
  }

  return (
    <div className="main_container">
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
              <p className='errorMessage'>
                {values.emailError}
              </p>
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
              <p className='errorMessage'>
                {values.passwordError}
              </p>
            </div>
            <div className='form_input'>
            <label>Are you a vendor?</label>
            <div className='form_input_radio'>
            <div className='radio_buttons'>
                <input
                  className='checkbox'
                  type='radio' 
                  name='role' 
                  id='vendor'
                  value='vendor'
                  checked={values.role === 'vendor'}
                  onChange={handleChange}
                />
                <label htmlFor='vendor'>Yes</label>
              </div>  
              <div className='radio_buttons'>
                <input 
                  className='checkbox'
                  type='radio' 
                  name='role' 
                  id='customer' 
                  value='customer'
                  checked={values.role === 'customer'}
                  onChange={handleChange}
                />
                <label htmlFor='customer'>No</label>
              </div>
            </div>
            <p className='errorMessage'>
                {values.roleError}
            </p>
            </div>
            <button className='confirm_button' onClick={proceed}>Next</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserDetails;