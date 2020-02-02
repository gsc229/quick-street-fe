import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../contexts/AuthContext';

// styles
import login from '../styles/scss/login.module.scss';
import axiosWithAuth from '../utils/axiosWithAuth';

// components
import { CustomButton } from '../components/index';
import Image from '../assets/images/Image';

const Login = (props) => {
	const { state, signin, signout } = useContext(AuthContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<div className={login.container}>
			<div className={login.wrapper}>
				<h1>Welcome Back!</h1>
				<h1>Login</h1>
				<div className={login.form}>
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
						<CustomButton onClick={() => signin({ email, password })} styleClass="green-full">
							Login
						</CustomButton>
					</div>
					<p>
						Don't have an account?
						<Link className={login.link} to="/register">
							Create One
						</Link>
					</p>
					<div className={login.logo}>
						<Image name="LoginLogo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
