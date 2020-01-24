import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../../../utils/axiosWithAuth';
import '../../../../styles/scss/customerFacingVendorProfile.scss';
import { Modal } from '../../../index';

const ViewVendorProduct = (props) => {
	const [ image, setImage ] = useState('');
	const [ quantity, setQuantity ] = useState('1');
	const [ showModal, setShowModal ] = useState(false);

	const handleChange = (event) => {
		setQuantity(event.target.value);
	}

	const showHideModal = (bool) => {
		if(props.loggedIn) {
			setShowModal(bool);
		}
	}

	const handleAddToCart = () => {
		const postObject = {
			productId: props.product._id,
			price: props.product.price, 
			quantity
		}
		console.log(postObject);
		showHideModal(false);
		// POST request to add item to cart
	}

	useEffect(() => {
		axiosWithAuth()
			.get(`/products/${props.product._id}/product-images`)
			.then((response) => {
				// console.log(response);
				setImage(response.data.data[0].secure_url);
			})
			.catch((error) => {
				console.log(error);
			});
	});



	return (
		<>
		<div onClick={() => showHideModal(true)} className="product" key={props.product._id}>
			<img className="product_image" src={image} alt="img" />
			<p className="product_name">{props.product.name}</p>
			<p className="product_price">${props.product.price}</p>
		</div>
		<Modal showModal={showModal}>
			<img className="product_image" src={image} alt="img" />
			<p className="product_name">{props.product.name}</p>
			<p className="product_price">${props.product.price}</p>
			<input
				name='quantity'
				type='number'
				value={quantity}
				onChange={handleChange}
			/>
			<button onClick={() => showHideModal(false)}>Close</button>
			<button onClick={handleAddToCart}>Add To Cart</button>
		</Modal>
		</>
	);
};

export default ViewVendorProduct;
