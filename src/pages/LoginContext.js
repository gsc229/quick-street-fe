import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';

import registration from '../styles/scss/registration.module.scss';
const LoginContext = () => {
	const { state, signin, signout, changeMessage} = useContext(AuthContext);
	const [ email, setemail ] = useState('');
	const [ password, setpassword ] = useState('');

	return (
		<div className={registration.wrapper}>
			<h1>{state.message}</h1>
			<button onClick={() => changeMessage()}>
				Change Message
			</button>

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

			<button onClick={() => signin({ email, password })}>Log In</button>
			<button onClick={() => signout()}>Log Out</button>
		</div>
	);
};

export default LoginContext;
