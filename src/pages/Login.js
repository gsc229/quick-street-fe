import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../styles/scss/login.module.scss';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
	const [ credentials, setCredentials ] = useState({
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
					password: credentials.password
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
					<p>Enter your username and password below.</p>

					<div className={login.form_input}>
						<label htmlFor="email">Email or Username</label>
						<input
							type="text"
							name="email"
							id="email"
							// placeholder='Enter your email'
							value={credentials.email}
							onChange={handleChange}
						/>
						<p className="errorMessage">{credentials.emailError}</p>
					</div>
					<div className={login.form_input}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							// placeholder='Please enter a password'
							value={credentials.password}
							onChange={handleChange}
						/>
						<p className="errorMessage">{credentials.passwordError}</p>
					</div>
					<p>
						Don't have an account?
						<Link className="link" to="/register">
							Create One
						</Link>
					</p>
					<button className={login.login_button}>Login</button>
					<p>
						Not a vendor? Start browsing{' '}
						<Link className="link" to="/browse">
							here.
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
