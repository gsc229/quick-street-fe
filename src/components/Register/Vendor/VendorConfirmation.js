import React, { useState } from 'react';

import axiosWithAuth from '../../../utils/axiosWithAuth';
import { CustomButton } from '../../index';

// styles
import registration from '../../../styles/scss/registration.module.scss';
const VendorConfirmation = (props) => {
	const [ duplicateEmail, setDuplicateEmail ] = useState('');
	// console.log('VendorConfirmation props: ', props);
	const { email, password, businessName, phoneNumber, streetAddress, city, zipcode } = props.values;

	const cancel = (event) => {
		event.preventDefault();
		props.previousStep();
	};

	const convertAddress = () => {
		if (streetAddress || city) {
			let address = '';
			address = streetAddress.trim().concat(',').concat(city.trim()).concat(',').concat(zipcode.trim());
			// console.log(address);
			return address;
		} else {
			return zipcode;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const registerObject = {
			email,
			password,
			business_name: businessName,
			phone: phoneNumber,
			address: convertAddress(),
			vendor: true
		};

		axiosWithAuth()
			.post('/auth/register', registerObject)
			.then((response) => {
				// console.log('POST VendorConfirm res: ', response);
				localStorage.setItem('token', response.data.token);
				props.history.push(`/profile/${response.data.id}`);
			})
			.catch((error) => {
				// console.log(error.response);
				// console.log(error.response.data.error);
				setDuplicateEmail(`${error.response.data.error} Please hit back and change it to register`);
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
					<div className={registration.confirm_form}>
						<h1>Business Name</h1>
						<p>{businessName}</p>
					</div>
					<div className={registration.confirm_form}>
						<h1>Phone Number</h1>
						<p>{phoneNumber}</p>
					</div>

					{streetAddress.length > 0 && (
						<div className={registration.confirm_form}>
							<h1>Street Address</h1>
							<p>{streetAddress}</p>
						</div>
					)}

					{city.length > 0 && (
						<div className={registration.city_zip_container}>
							<div className={registration.city}>
								<h1>City</h1>
								<p>{city}</p>
							</div>
							<div className={registration.city_zip}>
								<h1>Zipcode</h1>
								<p>{zipcode}</p>
							</div>
						</div>
					)}

					{city.length === 0 && (
						<div className={registration.city_zip_container}>
							<div className={registration.city_zip}>
								<p>{zipcode}</p>
							</div>
						</div>
					)}

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

export default VendorConfirmation;
