import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import login from '../styles/scss/login.module.scss';
import axiosWithAuth from '../utils/axiosWithAuth';

// components
import { CustomButton } from '../components/index';

const Login = (props) => {
	const [credentials, setCredentials] = useState({
		email: '',
		emailError: '',
		password: '',
		passwordError: ''
	});

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
			emailError: '',
			passwordError: ''
		});
	};

	const validate = () => {
		let emailError = '';
		let passwordError = '';

		if (!credentials.email) {
			emailError = 'Email cannot be empty';
		}

		if (!credentials.password) {
			passwordError = 'Password cannot be empty';
		}

		if (emailError || passwordError) {
			setCredentials({
				...credentials,
				emailError,
				passwordError
			});
			return false;
		}

		return true;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validate()) {
			// console.log(credentials);
			axiosWithAuth()
				.post('/auth/login', {
					email: credentials.email,
					password: credentials.password,
					vendor: true
				})
				.then((response) => {
					// console.log(response.data.id);
					localStorage.setItem('token', response.data.token);
					props.history.push(`profile/${response.data.id}`);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	};

	return (
		<div className={login.container}>
			<div className={login.wrapper}>
				<form className={login.form} onSubmit={handleSubmit}>
					<h1>Welcome Back!</h1>
					<p>Enter your email address and password below.</p>
					<div className={login.input}>
						<label htmlFor="email">Email Address</label>
						<input
							type="text"
							name="email"
							id="email"
							// placeholder='Enter your email'
							value={credentials.email}
							onChange={handleChange}
						/>
						<p className={login.errorMessage}>{credentials.emailError}</p>
					</div>
					<div className={login.input}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							// placeholder='Please enter a password'
							value={credentials.password}
							onChange={handleChange}
						/>
						<p className={login.errorMessage}>{credentials.passwordError}</p>
					</div>
					<p>
						Don't have an account?
						<Link className={login.link} to="/register">
							Create One
						</Link>
					</p>
					<CustomButton type="submit" styleClass="green-full">
						Login
					</CustomButton>
					<p>
						Not a vendor? Start browsing
						<Link className={login.link} to="/browse">
							here.
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
