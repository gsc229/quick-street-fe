import React, { useEffect, useContext } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { OrderReviewItem } from '../components/index';
import { Context as CartContext } from '../contexts/TestCartContext';

import {Nav} from '../components/index';
import StripeCheckoutButton from './StripeCheckoutButton';

// styles
import review from '../styles/scss/review.module.scss';

// components
import { CustomButton } from '../components/index';

const OrderReview = (props) => {
	const customerId = localStorage.getItem('user_id');
	const { state, getCartItems } = useContext(CartContext);
	const cart = state.cart;
	// component did mount, will mount, did update

	useEffect(() => {
		getCartItems(customerId);
	}, []);

	return (
		<React.Fragment>
			<div className={review.navbar}>
				<Nav />
			</div>
			<div className={review.container}>
				<h1>Reviewing My Cart</h1>
				<div className={review.wrapper}>
				
						{cart &&
							cart.items &&
							cart.items.map((product) => <OrderReviewItem product={product} key={product.item._id} />)}
					</div>

					<div className={review.payment_container}>
						<div className={review.row}>
							<p>Grand Total </p>
							<h2>${cart.total}</h2>
						</div>
						<CustomButton styleClass="green-border" onClick={props.history.goBack}>
							Cancel
						</CustomButton>
      					<StripeCheckoutButton  price={cart.total} customerId={customerId} />  
							</div></div>
		</React.Fragment>
	);
};

export default OrderReview;
