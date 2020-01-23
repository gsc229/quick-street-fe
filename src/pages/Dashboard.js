import React from 'react';
import { HeroBanner } from '../components/index';
// styling
import dashboard from '../styles/scss/dashboard.module.scss';
const Dashboard = () => {
	// Checks if logged in user is vendor

	// if
	// return Vendor components
	return (
		<div className={dashboard.container}>
			<div className={dashboard.wrapper}>
				<HeroBanner name="User name is this thing here" />
			</div>
			<p>Stripe</p>
			<p>Recent Orders / History</p>
			<p>Edit Email/Password</p>
		</div>
	);
	// else

	//return Customer Components
};

export default Dashboard;
