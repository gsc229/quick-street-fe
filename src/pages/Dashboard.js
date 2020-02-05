import React, { useState, useEffect } from 'react';
import { HeroBanner } from '../components/index';
import OrderHistory from '../components/Dashboard/OrderHistory';
import axiosWithAuth from '../utils/axiosWithAuth';

// components
import { Nav } from '../components/index';
// styling
import dashboard from '../styles/scss/dashboard.module.scss';
import browse from '../styles/scss/browse.module.scss';
import CustomButton from '../components/shared/CustomButton';
import Footer from '../components/shared/Footer';
const Dashboard = (props) => {
	const [ vendorBannerId, setVendorBannerId ] = useState('');
	const [ vendorName, setVendorName ] = useState('');
	// Checks if logged in user is vendor
	const isVendor = localStorage.getItem('isVendor');
	const user_id = localStorage.getItem('user_id');

	const getVendorBannerId = (vendorId) => {
		axiosWithAuth().get(`/vendors/${vendorId}`).then((res) => {
			console.log(res.data.data);
			setVendorBannerId(res.data.data.vendor_banner);
			setVendorName(res.data.data.business_name);
		});
	};

	useEffect(() => {
		getVendorBannerId(user_id);
	}, []);

	// if
	// return Vendor components
	if (isVendor === 'true') {
		return (
			<React.Fragment>
				<div style={{ backgroundColor: '#00B2ED' }} className={browse.temp_menu}>
					<Nav />
				</div>

				<div className={dashboard.container}>
					<div className={dashboard.wrapper}>
						<div>
							<h1>{vendorName}'s Dashboard</h1>
						</div>
						<HeroBanner vendorBannerId={vendorBannerId} />
					</div>
					<div className={dashboard.button_container}>
						<div className={dashboard.button_left}>
							<CustomButton
								styleClass="green-full"
								onClick={() => {
									console.log(`linked to stripe account`);
								}}
							>
								View Stripe Account
							</CustomButton>
						</div>
						<div className={dashboard.button_right}>
							<CustomButton
								styleClass={'green-border'}
								onClick={() => {
									props.history.push(`profile/${user_id}`);
								}}
							>
								Edit profile
							</CustomButton>
						</div>
					</div>
					<div>{/* <OrderHistory orders={props.orders} isVendor={isVendor} /> */}</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	} else {
		return (
			<div>
				<OrderHistory orders={props.orders} isVendor={isVendor} />
			</div>
		);
	}

	// else

	//return Customer Components
};

export default Dashboard;
