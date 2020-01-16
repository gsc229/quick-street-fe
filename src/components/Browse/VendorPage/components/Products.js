import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../../../utils/axiosWithAuth';
import Product from './Product';
import '../../../../styles/scss/customerFacingVendorProfile.scss';

const Products = (props) => {
	const [ vendorProducts, setVendorProducts ] = useState({
		products: [],
		count: 0
	});

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
		<div className="product_section">
			<header className="product_section_title">Products</header>
			<div className="products_div">
				{vendorProducts.products.map((product) => <Product product={product} key={product._id} />)}
				{vendorProducts.count === 0 && (
					<p className="no_products_content">There are no products to show right now.</p>
				)}
			</div>
		</div>
	);
};

export default Products;
