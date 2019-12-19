import React from 'react';

class UserDetails extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
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
          <button onClick={this.continue}>Next</button>
        </form>
      </div>
    )
  }
}

export default UserDetails;