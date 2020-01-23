import React, { useState } from 'react';

import axiosWithAuth from '../../../utils/axiosWithAuth';
import { CustomButton } from '../../index';

const CustomerConfirmation = (props) => {
	const { email, password } = props.values;
	const [ duplicateEmail, setDuplicateEmail ] = useState('');

	const cancel = (event) => {
		event.preventDefault();
		props.previousStep();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const registerObject = {
			email,
			password,
			vendor: false
		};
		axiosWithAuth()
			.post('/auth/register', registerObject)
			.then((response) => {
				// console.log('POST CustomerConfirm res: ', response);
				localStorage.setItem('token', response.data.token);
				props.history.push(`/customerprofile/${response.data.id}`);
			})
			.catch((error) => {
				// console.log(error.response);
				// console.log(error.response.data.error);
				setDuplicateEmail(`${error.response.data.error} Please go back and change it to register.`);
			});
	};

	return (
		<div className="main_container">
			<div className="form_container">
				<div className="customer_confrim_wapper">
					<h1>Please confirm your information</h1>
					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Email</p>
						<p className="vendor_confirmation_value">{email}</p>
					</div>
					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Password</p>
						<p className="vendor_confirmation_value">{password}</p>
					</div>
					{duplicateEmail && (
						<p>{duplicateEmail}</p>
					)}
					<div className="vendor_confirmation_div">
						<CustomButton styleClass="green-border" onClick={cancel}>
							Back
						</CustomButton>
						<CustomButton styleClass="green-full" onClick={handleSubmit}>
							Save & Confirm
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerConfirmation;
