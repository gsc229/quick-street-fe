import React, { useEffect, useContext } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { OrderReviewItem } from '../components/index';
import { Context as CartContext } from '../contexts/TestCartContext';
import review from '../styles/scss/review.module.scss';
import { Nav } from '../components/index';

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
				<div className={review.wrapper}>
					<p>Reviewing My Cart</p>
					<div className={review.card_wrapper}>
						{cart &&
							cart.items &&
							cart.items.map((product) => <OrderReviewItem product={product} key={product.item._id} />)}
					</div>
				</div>
				<div className={review.payment_container}>
					<p>Total $ {cart.total}</p>
					<button onClick={props.history.goBack}>Cancel</button>
					<button>Confirm</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OrderReview;
