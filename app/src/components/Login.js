import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // implement post request once backend is deployed
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input 
            type='password'
            name='password'
            id='password'
            placeholder='Please enter a password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;