import React from 'react';
// components
import { Nav } from '../index';
// stlyes
import order from '../../styles/scss/order.module.scss';
import browse from '../../styles/scss/browse.module.scss';
import Footer from '../shared/Footer';
const OrderConfirmation = () => {
	return (
		<React.Fragment>
			<div className={browse.temp_menu}>
				<Nav />
			</div>
			<div className={order.container}>
				<div className={order.wrapper}>
					<h1>Order Confirmed</h1>
					<p>Check your email for receipt!</p>
					<div className={order.info_container}>
						<div className={order.info_wrapper}>
							<p>Quantity</p>
							<p>Total</p>
						</div>
					</div>
					<div className={order.vendor_info_container}>
						<p>Contact vendor for pickup details </p>
						<div className={order.vendor_info_wrapper}>
							<h1>ANNIES</h1>
							<p>EMAIL</p>
							<p>EMAIL</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};
export default OrderConfirmation;
