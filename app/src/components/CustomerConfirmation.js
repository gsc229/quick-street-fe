import React from 'react';

const CustomerConfirmation = (props) => {
  const { email, password } = props.values;

  const cancel = (event) => {
    event.preventDefault();
    props.previousStep();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.values);
    // POST request to backend
  }

  return (
    <>
      <div>
        <h4>Email</h4>
        <h6>{email}</h6>

        <h4>Password</h4>
        <h6>{password}</h6>

        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={cancel}>Cancel</button>
          
      </div>
    </>
  )

}

export default CustomerConfirmation;