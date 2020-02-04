import React, { useState, useEffect, useContext } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

import axiosWithAuth from '../../utils/axiosWithAuth';
import { Context as CartContext } from '../../contexts/TestCartContext';

// styling
import review from '../../styles/scss/review.module.scss';

// components
import { CustomButton } from '../index';

const OrderReviewItem = ({ product }) => {
	const customerId = localStorage.getItem('user_id');
	const { updateCartItem, deleteCartItem } = useContext(CartContext);
	const [ vendor, setVendor ] = useState('');

	const [ quantity, setQuantity ] = useState(product.quantity);

	const handleQuantityChange = (event) => {
		setQuantity(event.target.value);
	};

	const editCartItemQuantity = (event) => {
		event.preventDefault();
		updateCartItem({
			productId: product.item._id,
			quantity,
			customerId
		});
	};

	useEffect(() => {
		axiosWithAuth()
			.get(`/vendors/${product.item.vendor}`)
			.then((response) => {
				// console.log(response);
				setVendor(response.data.data.business_name);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
				<div className={review.card_wrapper}>
			<div className={review.image_wrapper}>
				{product.item.product_image && (
					<CloudinaryContext cloudName="quickstlabs">
						<Image publicId={product.item.product_image.public_id} >
						<Transformation height="160" width="197" crop="fit" />
						</Image>
					</CloudinaryContext>
				)}
			</div>
			<div className={review.product_info}>
				<h1>{product.item.name}</h1>
				<p>{vendor}</p>

				<form className={review.quantity} onSubmit={editCartItemQuantity}>
					<label>Quantity</label>
					<input name="quantity" type="number" value={quantity} onChange={handleQuantityChange} />
				</form>
			</div>
			<div className={review.product_price}>
				<p>
					$ {product.item.price} per {product.item.unit}
				</p>
				<div className={review.button}>
					<CustomButton
						styleClass="red-border"
						onClick={() => deleteCartItem({ productId: product.item._id, customerId })}
					>
						Remove Item
					</CustomButton>
				</div>
			</div>
			</div>
		</React.Fragment>
	);
};

export default OrderReviewItem;
