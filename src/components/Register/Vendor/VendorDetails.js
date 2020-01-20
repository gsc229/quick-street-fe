import React from 'react';
import register_step2 from '../../../styles/scss/register_step2.module.scss';
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
		<div className={register_step2.container}>
			<div className={register_step2.form}>
				<h1>
					Great! <br />
					Let's get you <br />
					set up.
				</h1>
				<form>
					<div className={register_step2.form_input_vendor_details}>
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
					</div>
					<div className={register_step2.form_input_vendor_details}>
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
					</div>
					<label htmlFor="streetAddress">Street Address</label>
					<div className={register_step2.streetAddress}>
						<textarea
							type="text"
							name="streetAddress"
							id="streetAddress"
							// placeholder='Enter your street address'
							value={values.streetAddress}
							onChange={handleChange}
						/>
					</div>
					<div className={register_step2.city_zip_container}>
						<div className={register_step2.city_zip}>
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
						<div className={register_step2.city_zip}>
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
