import React from 'react';
import registration from '../../../styles/scss/registration.module.scss';
import { CustomButton } from '../../index';
const VendorDetails = (props) => {
	const { values, handleChange, nextStep, previousStep, setUserInfo } = props;

	const proceed = (event) => {
		event.preventDefault();
		if (validate()) {
			// console.log(values);
			nextStep();
		}
	};

	const validate = () => {
		let businessNameError = '';
		let phoneNumberError = '';
		let zipcodeError = '';

		if (!values.businessName) {
			businessNameError = 'Business name required';
		}

		if (!values.phoneNumber) {
			phoneNumberError = 'Phone number required';
		}

		if (!values.zipcode) {
			zipcodeError = 'Zipcode required';
		}

		if (businessNameError || phoneNumberError || zipcodeError) {
			setUserInfo({
				...values,
				businessNameError,
				phoneNumberError,
				zipcodeError
			});
			return false;
		}

		return true;
	};

	const cancel = (event) => {
		event.preventDefault();
		previousStep();
	};

	return (
		<div className={registration.container}>
			<div className={registration.wrapper}>
				<h1>Great!</h1>
				<h1>Let's get you set up.</h1>
				<form className={registration.form_step2}>
					<label htmlFor="businessName">Business Name</label>
					<input
						type="text"
						name="businessName"
						id="businessName"
						// placeholder='Enter your business name'
						value={values.businessName}
						onChange={handleChange}
					/>
					<p className="errorMessage">{values.businessNameError}</p>

					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="text"
						name="phoneNumber"
						id="phoneNumber"
						// placeholder='Enter your phone number'
						value={values.phoneNumber}
						onChange={handleChange}
					/>
					<p className="errorMessage">{values.phoneNumberError}</p>

					<label htmlFor="streetAddress">Street Address</label>
					<input
						type="text"
						name="streetAddress"
						id="streetAddress"
						// placeholder='Enter your street address'
						value={values.streetAddress}
						onChange={handleChange}
					/>

					<div className={registration.city_zip_container}>
						<div className={registration.city}>
							<label htmlFor="city">City</label>
							<input
								type="text"
								name="city"
								id="city"
								// placeholder='Enter your city'
								value={values.city}
								onChange={handleChange}
							/>
						</div>
						<div className={registration.city_zip}>
							<label htmlFor="zipcode">Zipcode</label>
							<input
								type="text"
								name="zipcode"
								id="zipcode"
								// placeholder='Enter your zipcode'
								value={values.zipcode}
								onChange={handleChange}
							/>
							<p className="errorMessage">{values.zipcodeError}</p>
						</div>
					</div>

					<CustomButton styleClass="green-border" onClick={cancel}>
						Cancel
					</CustomButton>
					<CustomButton styleClass="green-full" onClick={proceed}>
						Next
					</CustomButton>
				</form>
			</div>
		</div>
	);
};

export default VendorDetails;
