import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
import { Context as CartContext } from '../../../../contexts/TestCartContext';
//stlying 
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import profile from '../../../../styles/scss/profile.module.scss';
import modal from '../../../../styles/scss/browseModal.module.scss';
import { CustomButton } from '../../../index';
import { Modal } from '../../../index';
import ModalCarousel2 from './ModalCarousel2';

const ViewVendorProduct = (props) => {
	const { state, addCartItem, addItemFromOtherVendor } = useContext(CartContext);
	const cart = state.cart;
	// console.log('cart in the vendor product page', cart);
	const vendorId = props.vendorId;
	const [images, setImages] = useState([{}]);
	const [quantity, setQuantity] = useState('1');
	const [showModal, setShowModal] = useState(false);
	const [messageModal, setMessageModal] = useState(false);

	const customerId = localStorage.getItem('user_id');

	const handleChange = (event) => {
		setQuantity(event.target.value);
	}

	const showHideModal = (bool) => {
		setShowModal(bool);
	}

	const handleAddToCart = () => {
		showHideModal(false);
		if (cart.items.length === 0 || cart.items[0].item.vendor === vendorId) {
			addCartItem({
				productId: props.product._id,
				price: props.product.price,
				quantity: quantity,
				customerId: customerId
			})
		} else {
			setMessageModal(true); 
		}	

	};

	const handleEmptyCart = () => {
		setMessageModal(false);
		addItemFromOtherVendor({cartId: cart._id, customerId, productId: props.product._id, price: props.product.price, quantity: quantity });
	};

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
				{/* <img className={profile.image} src={images[0] ? images[0].secure_url : ""} alt="img" /> */}
				<CloudinaryContext cloudName="quickstlabs">
					<Image className={profile.image} publicId={images[0] && images[0].public_id}>
						<Transformation height="122" width="146" crop="fill" />
					</Image>
				</CloudinaryContext>
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
							<div className={modal.tags}><ul>{props.product.diet.map((diet, index) => (
								<div key={index}>
									<li>{diet}</li>
								</div>
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
								min='1'
								max='10'
							/>
						</div>
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

			<Modal showModal={messageModal}>	
				<div className={modal.change_vendor_container}>
					<h1>Cart not empty</h1>
					<h3>Cart contains items from a different vendor.</h3>
					<h3>Empty the cart and add this item?</h3>
					
					<div className={modal.button_wrapper}>
						<div className={modal.button_left}>
							<CustomButton styleClass='green-full' onClick={() => setMessageModal(false)}>Cancel</CustomButton>
						</div>
						<div className={modal.button_right}>
							<CustomButton styleClass='red-full' onClick={handleEmptyCart}>Empty Cart</CustomButton>
						</div>
					</div>
				</div>
			</Modal>					


		</>
	);
};

export default ViewVendorProduct;
