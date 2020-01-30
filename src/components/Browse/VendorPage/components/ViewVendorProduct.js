import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
//stlying 

import profile from '../../../../styles/scss/profile.module.scss';
import modal from '../../../../styles/scss/browseModal.module.scss';
import { CustomButton } from '../../../index';
import { Modal } from '../../../index';
import ModalCarousel2 from './ModalCarousel2';

const ViewVendorProduct = (props) => {
	
	const [images, setImages] = useState([{}]);
	const [quantity, setQuantity] = useState('1');
	const [showModal, setShowModal] = useState(false);
	const { cart, setCart } = props;
	const customerId = localStorage.getItem('user_id');
	
	const handleChange = (event) => {
		setQuantity(event.target.value);
	}

	const showHideModal = (bool) => {
		setShowModal(bool);
	}

	const getCartItems = () => {
		axiosWithAuth()
			.get(`customers/${customerId}/cart`)
			.then(response => {
				// console.log(response);
				setCart({
					...cart, 
					items: response.data.data.items,
					total: response.data.data.total,
					cartId: response.data.data._id
				})
			})
			.catch(err => console.log(err.response))
	}

	const handleAddToCart = () => {
		const postObject = {
			productId: props.product._id,
			price: props.product.price,
			quantity
		}
		// console.log(postObject);
		showHideModal(false);
		if (!customerId) {
			// cartContext.addToCart({...postObject, image: images[0].secure_url});
			// console.log(cartContext.products);
		} else {
			// POST request to add item to cart
			axiosWithAuth()
			.post(`customers/${customerId}/cart/addtocart`, postObject)
			.then(response => {
				// console.log("POST ViewV.Prod response: ", response)
				getCartItems();
			})
			.catch(err => console.log(err.response))
		}
	}

	useEffect(() => {
		axiosWithAuth()
			.get(`/products/${props.product._id}/product-images`)
			.then((response) => {
				//console.log('ViewVendorProducts.js response', response);
				setImages(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const modalLeftStyle = {
		width: "50%"
	};

	return (
		<>
			<div onClick={() => showHideModal(true)} className={profile.products_card} key={props.product._id}>
				<img className={profile.image} src={images[0] ? images[0].secure_url : ""} alt="img" />
				<p className={profile.name}>{props.product.name}</p>
				<p className={profile.price}>${props.product.price}</p>
			</div>
			<Modal showModal={showModal}>
				<div className={modal.container} >
					<div className={modal.column_left} style={modalLeftStyle} >
						{/* <img src={images[0] ? images[0].secure_url : ""} alt="img" /> */}
						{/* <ModalCarousel images={images} /> */}
						<ModalCarousel2 images={images} />
					</div>
					<div className={modal.column_right}>
						<div className={modal.row}>
							<h1>{props.product.name}</h1>
						</div>
						<div className={modal.row}>
							<div className={modal.tags}><ul>{props.product.diet.map(diet => (
								<li>{diet}</li>
							))}</ul></div>
						</div>
						<div className={modal.row}>
							<h2>{props.product.description}</h2>
						</div>

						<div className={modal.row_price}>
							<h1>${props.product.price}</h1>
						</div>

						<div className={modal.row_quantity}>
							<h3>Quantity: </h3>
							<input
								name='quantity'
								type='number'
								value={quantity}
								onChange={handleChange}
							/>
						</div>
						{console.log("Products", props)}
						<div className={modal.button_wrapper}>
							<div className={modal.button_left}>
								<CustomButton styleClass='red-full' onClick={() => showHideModal(false)}>Close</CustomButton>
							</div>
							<div className={modal.button_right}>
								<CustomButton styleClass='green-full' onClick={handleAddToCart}>Add To Cart</CustomButton>
							</div>
						</div>
					</div>
				</div>
				<div class={modal.overlay} id={modal.overlay}>
				</div>
			</Modal>
		</>
	);
};

export default ViewVendorProduct;
