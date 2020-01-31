import React, { useState } from 'react';

import axiosWithAuth from '../../../utils/axiosWithAuth';
import { CustomButton } from '../../index';

// stlyes
import registration from '../../../styles/scss/registration.module.scss';

const CustomerConfirmation = (props) => {
	const { email, password } = props.values;
	const [ duplicateEmail, setDuplicateEmail ] = useState('');

	const cancel = (event) => {
		event.preventDefault();
		props.previousStep();
	};

	const createCart = (customerId) => {
		axiosWithAuth()
			.post(`/customers/${customerId}/cart`)
			.then((response) => {
				localStorage.setItem('cart_id', response.data.data._id);
				console.log('POST Login.js response: ', response);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const checkIfCart = (customerId) => {
		axiosWithAuth()
			.get(`/customers/${customerId}/cart`)
			.then((response) => {
				localStorage.setItem('cart_id', response.data.data._id);
				//console.log("GET Login.js response: ", response)
			})
			.catch((err) => {
				if (err.response.status === 404) {
					createCart(customerId);
				}
				console.log(err.response);
			});
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
				checkIfCart(response.data.id);
				props.history.push('/browse');
			})
			.catch((error) => {
				// console.log(error.response);
				// console.log(error.response.data.error);
				setDuplicateEmail(`${error.response.data.error} Please go back and change it to register.`);
			});
	};

	return (
		<div className={registration.wrapper}>
			<div className={registration.form_step3}>
				<h1>Please confirm your information</h1>
				<div className={registration.confirm_form}>
					<h1>Email</h1>
					<p>{email}</p>
				</div>
				<div className={registration.confirm_form}>
					<h1>Password</h1>
					<p>{password}</p>
				</div>
				{duplicateEmail && <div class={registration.errorMessage}>{duplicateEmail}</div>}

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
	);
};

export default CustomerConfirmation;
