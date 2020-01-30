import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';

import registration from '../styles/scss/registration.module.scss';
const RegisterContext = () => {
	const { state, signup } = useContext(AuthContext);
	const [ businessName, setbusinessName ] = useState('');
	const [ phoneNumber, setphoneNumber ] = useState('');
	const [ streetAddress, setstreetAddress ] = useState('');
	const [ city, setcity ] = useState('');
	const [ zipcode, setzipcode ] = useState('');
	const [ email, setemail ] = useState('');
	const [ password, setpassword ] = useState('');
	const [ role, setrole ] = useState('');

	return (
		<div className={registration.wrapper}>
			<h1>Great!</h1>
			<h1>Let's get you set up.</h1>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				// placeholder='Enter your business name'
				value={email}
				onChange={(e) => setemail(e.target.value)}
			/>
			<label htmlFor="password">password</label>
			<input
				type="text"
				name="password"
				id="password"
				// placeholder='Enter your business name'
				value={password}
				onChange={(e) => setpassword(e.target.value)}
			/>

			<label htmlFor="businessName">Business Name</label>
			<input
				type="text"
				name="businessName"
				id="businessName"
				// placeholder='Enter your business name'
				value={businessName}
				onChange={(e) => setbusinessName(e.target.value)}
			/>

			<label htmlFor="phoneNumber">Phone Number</label>
			<input
				type="text"
				name="phoneNumber"
				id="phoneNumber"
				// placeholder='Enter your phone number'
				value={phoneNumber}
				onChange={(e) => setphoneNumber(e.target.value)}
			/>

			<label htmlFor="streetAddress">Street Address</label>
			<input
				type="text"
				name="streetAddress"
				id="streetAddress"
				// placeholder='Enter your street address'
				value={streetAddress}
				onChange={(e) => setstreetAddress(e.target.value)}
			/>

			<div className={registration.city_zip_container}>
				<div className={registration.city}>
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						id="city"
						// placeholder='Enter your city'
						value={city}
						onChange={(e) => setcity(e.target.value)}
					/>
				</div>
				<div className={registration.city_zip}>
					<label htmlFor="zipcode">Zipcode</label>
					<input
						type="text"
						name="zipcode"
						id="zipcode"
						// placeholder='Enter your zipcode'
						value={zipcode}
						onChange={(e) => setzipcode(e.target.value)}
					/>
				</div>
				<div className={registration.vendorq_wrapper}>
					<p>Are you a vendor?</p>
					<div className={registration.radio_buttons_wrapper}>
						<label for="vendor">
							<input
								type="radio"
								name="role"
								value="vendor"
								checked={role === 'vendor'}
								onChange={(e) => setrole(e.target.value)}
							/>
							Yes
						</label>
						<label htmlFor="customer">
							<input
								type="radio"
								name="role"
								value="customer"
								checked={role === 'customer'}
								onChange={(e) => setrole(e.target.value)}
							/>
							No
						</label>
					</div>
				</div>
			</div>
			<button
				onClick={() =>
					signup({ email, password, role, businessName, phoneNumber, streetAddress, city, zipcode })}
			>
				Sign up
			</button>
		</div>
	);
};

export default RegisterContext;
