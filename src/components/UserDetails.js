import React from 'react';
import { Link } from 'react-router-dom';
import registration from '../styles/scss/registration.module.scss';

const UserDetails = props => {
  const { values, nextStep, handleChange, setUserInfo } = props;

  const proceed = event => {
    event.preventDefault();
    if (validate()) {
      // console.log(values);
      nextStep();
    }
  };

  const validate = () => {
    let emailError = '';
    let passwordError = '';
    let roleError = '';

    if (!values.email.includes('@')) {
      emailError = 'Invalid email';
    }

    if (values.password.length === 0) {
      passwordError = 'Password required';
    }

    if (values.password.length < 6 && values.password) {
      passwordError = 'Minimum password is 6 characters';
    }

    if (!values.role) {
      roleError = 'Role required';
    }

    if (emailError || passwordError || roleError) {
      setUserInfo({
        ...values,
        emailError,
        passwordError,
        roleError
      });
      return false;
    }

    return true;
  };

  return (
    //bringing in our module
    <div className={registration.container}>
      <form className={registration.form}>
        <span>Create An </span>
        <span>Account With</span>
        <span>Quick Street</span>
        <p>
          Already have an account?{' '}
          <Link className='link' to='/login'>
            Log In
          </Link>
        </p>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          // placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        <p className='errorMessage'>{values.emailError}</p>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          // placeholder='Please enter a password'
          value={values.password}
          onChange={handleChange}
        />
        <p className='errorMessage'>{values.passwordError}</p>
        <div className={registration.radio_buttons}>
          <label>Are you a vendor?</label>
          <div className={registration.radio_buttons}>
            <input
              type='radio'
              name='role'
              value='vendor'
              checked={values.role === 'vendor'}
              onChange={handleChange}
            />
            <label htmlFor='vendor'>Yes</label>

            <input
              type='radio'
              name='role'
              value='customer'
              checked={values.role === 'customer'}
              onChange={handleChange}
            />
            <label htmlFor='customer'>No</label>
          </div>
        </div>
        <p>{values.roleError}</p>
        <button className={registration.cancel_button} onClick={proceed}>
          Cancel
        </button>
        <button className={registration.next_button} onClick={proceed}>
          Next
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
