import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/scss/index.scss';
import UserContext from './contexts/UserContext';

// Context
import { Provider as AuthProvider } from './contexts/AuthContext';
import {
	Register, // ** Register
	Login, // ** Login
	Vendor, // ** Browsing Vendor Page
	Browse, // ** Browsing page (Map, Search)
	Landing, // ** Home Page
	Profile, //** Vendors Editing Page */
	Styling, // ** Styling Template */
	Dashboard, // ** Dashboard Page **/
	OrderReview // ** Order Review Page **/
} from './pages/index';

import RegisterContext from './pages/RegisterContext';
import LoginContext from './pages/LoginContext';
const App = () => {
	return (
		<div>
			<Route path="/orderreview/:id" component={OrderReview} /> 
			<Route path="/RegisterContext" component={RegisterContext} />
			<Route path="/LoginContext" component={LoginContext} />
			<Route path="/styling" component={Styling} />
			<Route exact path="/" component={Landing} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Switch>
				<Route path="/profile/:id" component={Profile} />
				<Route path="/browse/:id" component={Vendor} />
				<Route path="/browse" component={Browse} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</div>
	);
};

export default () => {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	);
};
