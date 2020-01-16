import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/scss/index.scss';

import {
	Register, // ** Register
	Login, // ** Login
	Vendor, // ** Browsing Vendor Page
	Browse, // ** Browsing page (Map, Search)
	Landing, // ** Home Page
	Profile //** Vendors Editing Page */
} from './pages/index';
import Footer from './components/shared/Footer';
import Menu from './components/shared/Menu';
import NavBar from './components/shared/NavBar';

const App = () => {
	// console.log(window.cloudinary);
	return (
		<div>
			<Route exact path="/" component={Landing} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Switch>
				<Route path="/profile/:id" component={Profile} />
				<Route path="/browse/:id" component={Vendor} />
				<Route path="/browse" component={Browse} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
