import React from 'react';

import axiosWithAuth from '../../../utils/axiosWithAuth';
import { CustomButton } from '../../index';
const VendorConfirmation = (props) => {
	console.log('VendorConfirmation props: ', props);
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
			address: convertAddress()
		};

		axiosWithAuth()
			.post('/auth/register', registerObject)
			.then((response) => {
				console.log('POST VendorConfirm res: ', response);
				localStorage.setItem('token', response.data.token);
				props.history.push(`/profile/${response.data.id}`);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<div className="main_container">
			<div className="form_container">
				<div className="vendor_confrim_wapper">
					<h1>Please confirm your information</h1>
					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Email</p>
						<p className="vendor_confirmation_value">{email}</p>
					</div>

					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Password</p>
						<p className="vendor_confirmation_value">{password}</p>
					</div>

					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Business Name</p>
						<p className="vendor_confirmation_value">{businessName}</p>
					</div>

					<div className="vendor_confirmation_div">
						<p className="vendor_confirmation_title">Phone Number</p>
						<p className="vendor_confirmation_value">{phoneNumber}</p>
					</div>

					{streetAddress.length > 0 && (
						<div className="vendor_confirmation_div">
							<p className="vendor_confirmation_title">Street Address</p>
							<p className="vendor_confirmation_value">{streetAddress}</p>
						</div>
					)}

					{city.length > 0 && (
						<div className="vendor_confirmation_div address_confirmation">
							<div className="vendor_city_confirmation">
								<p className="vendor_confirmation_title">City</p>
								<p className="vendor_confirmation_value">{city}</p>
							</div>
							<div className="vendor_city_confirmation">
								<p className="vendor_confirmation_title">Zipcode</p>
								<p className="vendor_confirmation_value">{zipcode}</p>
							</div>
						</div>
					)}

					{city.length === 0 && (
						<div className="vendor_confirmation_div">
							<p className="vendor_confirmation_title">Zipcode</p>
							<p className="vendor_confirmation_value">{zipcode}</p>
						</div>
					)}

					<div className="vendor_confirmation_div">
						<CustomButton styleClass="green-border" onClick={cancel}>
							Cancel
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

export default VendorConfirmation;
