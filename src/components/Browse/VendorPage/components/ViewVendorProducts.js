import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../../../utils/axiosWithAuth';
import Product from './ViewVendorProduct';

//styling
import profile from '../../../../styles/scss/profile.module.scss';
const ViewVendorProducts = (props) => {
	const [ vendorProducts, setVendorProducts ] = useState({
		products: [],
		count: 0
	});
	const { setCart } = props;
	const getVendorProducts = (id) => {
		axiosWithAuth()
			.get(`/vendors/${id}/products`)
			.then((response) => {
				// console.log(response);
				setVendorProducts({
					...vendorProducts,
					products: response.data.data,
					count: response.data.count
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getVendorProducts(props.vendorId);
	}, []);

	return (
		<div className={profile.products_container}>
			<div className={profile.products_wrapper}>
				<h1>Products</h1>
				<div className={profile.products_card_wrapper}>
					{vendorProducts.products.map((product) => (
						<Product setCart={setCart} product={product} key={product._id} loggedIn={true} />
					))}
					{vendorProducts.count === 0 && (
						<p className="no_products_content">There are no products to show right now.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ViewVendorProducts;
