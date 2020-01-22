import React from 'react';
import { Link } from 'react-router-dom';
import registration from '../../styles/scss/registration.module.scss';
import { CustomButton } from '../index';
const RegisterDetails = (props) => {
	const { values, nextStep, handleChange, setUserInfo } = props;

	const proceed = (event) => {
		event.preventDefault();
		if (validate()) {
			// console.log(values);
			nextStep();
		}
	};

	const cancel = (event) => {
		event.preventDefault();
		props.history.push('/');
	};

	const validate = () => {
		let emailError = '';
		let passwordError = '';
		let roleError = '';

		if (!values.email.includes('@')) {
			emailError = 'Invalid email';
		}

		if (values.password.length === 0) {
			passwordError = 'Password required';
		}

		if (values.password.length < 6 && values.password) {
			passwordError = 'Minimum password is 6 characters';
		}

		if (!values.role) {
			roleError = 'Role required';
		}

		if (emailError || passwordError || roleError) {
			setUserInfo({
				...values,
				emailError,
				passwordError,
				roleError
			});
			return false;
		}

		return true;
	};

	return (
		//bringing in our module
		<div className={registration.container}>
			<div className={registration.wrapper}>
				<h1>Create An Account With Quick Street</h1>
				<p>
					Already have an account?{' '}
					<Link className="link" to="/login">
						Log In
					</Link>
				</p>
				<form className={registration.form}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						// placeholder='Enter your email'
						value={values.email}
						onChange={handleChange}
					/>
					<p className="errorMessage">{values.emailError}</p>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						// placeholder='Please enter a password'
						value={values.password}
						onChange={handleChange}
					/>
					<p className="errorMessage">{values.passwordError}</p>

					<div className={registration.vendorq_wrapper}>
						<p>Are you a vendor?</p>
						<div className={registration.radio_buttons_wrapper}>
							<label for="vendor">
								<input
									type="radio"
									name="role"
									value="vendor"
									checked={values.role === 'vendor'}
									onChange={handleChange}
								/>
								Yes
							</label>
							<label htmlFor="customer">
								<input
									type="radio"
									name="role"
									value="customer"
									checked={values.role === 'customer'}
									onChange={handleChange}
								/>
								No
							</label>
						</div>
					</div>

					<p>{values.roleError}</p>

					<div className={registration.button_wrapper}>
						<CustomButton styleClass="green-border" onClick={cancel}>
							Cancel
						</CustomButton>
					</div>
					<div className={registration.button_wrapper}>
						<CustomButton styleClass="green-full" onClick={proceed}>
							Next
						</CustomButton>
					</div>

				</form>
			</div>
		</div>
	);
};

export default RegisterDetails;
