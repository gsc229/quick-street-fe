import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../contexts/AuthContext';

// styles
import login from '../styles/scss/login.module.scss';
import axiosWithAuth from '../utils/axiosWithAuth';

// components
import { CustomButton } from '../components/index';

const Login = (props) => {
	const { state, signin, signout } = useContext(AuthContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');


	// const handleChange = (event) => {
	// 	setCredentials({
	// 		...credentials,
	// 		[event.target.name]: event.target.value,
	// 		emailError: '',
	// 		passwordError: ''
	// 	});
	// };

	// const validate = () => {
	// 	let emailError = '';
	// 	let passwordError = '';

	// 	if (!credentials.email) {
	// 		emailError = 'Email cannot be empty';
	// 	}

	// 	if (!credentials.password) {
	// 		passwordError = 'Password cannot be empty';
	// 	}

	// 	if (emailError || passwordError) {
	// 		setCredentials({
	// 			...credentials,
	// 			emailError,
	// 			passwordError
	// 		});
	// 		return false;
	// 	}

	// 	return true;
	// };

	// const createCart = (customerId) => {
	// 	axiosWithAuth()
	// 		.post(`/customers/${customerId}/cart`)
	// 		.then((response) => {
	// 			localStorage.setItem('cart_id', response.data.data._id);
	// 			console.log('POST Login.js response: ', response);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.response);
	// 		});
	// };

	// const checkIfCart = (customerId) => {
	// 	axiosWithAuth()
	// 		.get(`/customers/${customerId}/cart`)
	// 		.then((response) => {
	// 			localStorage.setItem('cart_id', response.data.data._id);
	// 			//console.log("GET Login.js response: ", response)
	// 		})
	// 		.catch((err) => {
	// 			if (err.response.status === 404) {
	// 				createCart(customerId);
	// 			}
	// 			console.log(err.response);
	// 		});
	// };

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	if (validate()) {
	// 		// console.log(credentials);
	// 		axiosWithAuth()
	// 			.post('/auth/login', {
	// 				email: credentials.email,
	// 				password: credentials.password
	// 			})
	// 			.then((response) => {
	// 				// console.log(response);
	// 				localStorage.setItem('token', response.data.token);
	// 				localStorage.setItem('user_id', response.data.id);
	// 				if (response.data.isVendor) {
	// 					props.history.push(`profile/${response.data.id}`);
	// 				} else {
	// 					checkIfCart(response.data.id);
	// 					props.history.push({ pathname: '/browse', customer_id: response.data.id });
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.log(error.response);
	// 			});
	// 	}
	// };

	return (
		<div className={login.container}>
			<div className={login.wrapper}>
				<h1>Welcome Back!</h1>
				<p>
					Don't have an account?
					<Link className={login.link} to="/register">
						Create One
					</Link>
				</p>
				<div className={login.form} >
					<div className={login.form_wrapper}>
						<label htmlFor="email">Email Address</label>
						<input
							type="text"
							name="email"
							id="email"
							// placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{/* <p className={login.errorMessage}>{credentials.emailError}</p> */}
					</div>
					<div className={login.form_wrapper}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							// placeholder='Please enter a password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{/* <p className={login.errorMessage}>{credentials.passwordError}</p> */}
					</div>
					<div className={login.button_wrapper}>
						<CustomButton onClick={() => signin({email, password})} styleClass="green-full">
							Login
						</CustomButton>
					</div>
					<p>
						Not a vendor? Start browsing
						<Link className={login.link} to="/browse">
							here.
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
