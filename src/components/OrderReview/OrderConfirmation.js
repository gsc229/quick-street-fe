import React, { useEffect, useContext, useState } from 'react';
import { Context as OrderContext } from '../../contexts/OrderContext';
import axios from 'axios';
// components
import { Nav } from '../index';
// stlyes
import order from '../../styles/scss/order.module.scss';
import browse from '../../styles/scss/browse.module.scss';
import Footer from '../shared/Footer';
import axiosWithAuth from '../../utils/axiosWithAuth';

const OrderConfirmation = () => {
	const [ orderObj, setOrderObj ] = useState('');
	const customerId = localStorage.getItem('user_id');
	console.log('customerID in orderconfirmation', customerId);
	//const { state, setOrders } = useContext(OrderContext); // context??

	useEffect(() => {
		axiosWithAuth().get(`/customers/${customerId}/order`).then((res) => {
			const length = res.data.orders.length;
			const lastOrder = res.data.orders[length - 1];
			setOrderObj(lastOrder);
			console.log('last order', lastOrder);
		});
	}, []);

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
							<h1>Your Order Number</h1>
							<p>{orderObj._id}</p>
						</div>
					</div>
					<div className={order.vendor_info_container}>
						<p>Contact vendor for pickup details </p>
						<div className={order.vendor_info_wrapper}>
							<h1>Jim's Cookies</h1>
							<p>555-555-4444</p>
							<p>jim@theoffice.com</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};
export default OrderConfirmation;
