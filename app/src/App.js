import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import VendorProfile from './components/VendorProfile/VendorProfile';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage/index';

function App() {
	return (
		<div>
			<LandingPage />
			<Route path="/landing" component={LandingPage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/profile" component={VendorProfile} />
		</div>
	);
}

export default App;
