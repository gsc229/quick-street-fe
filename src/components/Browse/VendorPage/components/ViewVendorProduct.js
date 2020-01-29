import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
import '../../../../styles/scss/OldcustomerFacingVendorProfile.scss';
import { Modal } from '../../../index';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import ModalCarousel from './ModalCarousel';
import ModalCarousel2 from './ModalCarousel2';
import { UserContext } from '../../../../contexts/UserContext';
import { CartContext } from '../../../../contexts/CartContext';

const ViewVendorProduct = (props) => {
	const userContext = useContext(UserContext); 
	// const cartContext = useContext(CartContext);

	const [images, setImages] = useState([{}]);
	const [quantity, setQuantity] = useState('1');
	const [showModal, setShowModal] = useState(false);
	const { cart, setCart } = props;
	// console.log(getCartItems);
	const customerId = userContext.user.userId;
	// const customerId = localStorage.getItem('user_id');
	// console.log(customerId);
	console.log('cart on the vendor product page', cart);
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
				// console.log("GET ViewV.Prod response: ", response)
				// setCart(response.data.data.items);
				setCart({
					...cart, 
					items: response.data.data.items,
					total: response.data.data.total,
					cartId: response.data.data._id
				})
			})
			.catch(err => console.log(err.response))
	}

	// useEffect(() => {
	// 	getCartItems()
	// }, [cart])


	const handleAddToCart = () => {
		const postObject = {
			productId: props.product._id,
			price: props.product.price,
			quantity
		}
		console.log(postObject);
		showHideModal(false);
		if (!customerId) {
			// cartContext.addToCart({...postObject, image: images[0].secure_url});
			// console.log(cartContext.products);
		} else {
			// POST request to add item to cart
			axiosWithAuth()
			.post(`customers/${customerId}/cart/addtocart`, postObject)
			.then(response => {
				console.log("POST ViewV.Prod response: ", response)
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
			<div onClick={() => showHideModal(true)} className="product" key={props.product._id}>
				<img className="product_image" src={images[0] ? images[0].secure_url : ""} alt="img" />
				<p className="product_name">{props.product.name}</p>
				<p className="product_price">${props.product.price}</p>
			</div>
			<Modal showModal={showModal}>
				{/* MODAL close x */}
				<i
					onClick={() => showHideModal(false)}
					className="fa fa-times close_x"></i>


				<div className='modal_wrapper' >
					<div className="modal_left" style={modalLeftStyle} >


						{/* <img src={images[0] ? images[0].secure_url : ""} alt="img" /> */}
						{/* <ModalCarousel images={images} /> */}
						<ModalCarousel2 images={images} />

					</div>
					{/* LEFT/RIGHT DIVIDE */}
					<div className="modal_right">
						<p>Name: </p>
						<p className="modal_product_name">
							{props.product.name}</p>
						<p>Price: </p>
						<p className="modal_product_price">${props.product.price}</p>
						<p>Quantity: </p>
						<input
							name='quantity'
							type='number'
							value={quantity}
							onChange={handleChange}
						/>
						<button onClick={() => showHideModal(false)}>Close</button>
						<button onClick={handleAddToCart}>Add To Cart</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ViewVendorProduct;
