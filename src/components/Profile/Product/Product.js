import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import product from '../../../styles/scss/vendor/a_vendors_products.module.scss';

const Product = ({ name, img, price, productId, setReloadProducts, reloadProducts }) => {
	const [productImages, setProductImages] = useState('');

	useEffect(() => {
		//console.log(`USEEFFECT 3 Product.js productId: `, productId)
		axiosWithAuth()
			.get(`/products/${productId}/product-images`)
			.then(response => {
				//console.log(`GET /:productId/product-images Product.js `, response)
				setProductImages(response.data.data);
			})
			.catch(error => {
				console.log(`ERROR GET /:productId/product-images Product.js`, error);
			})
	}, [setReloadProducts, reloadProducts]);
	console.log(productImages[0]);
	return (
		<div className={product.vendor_product}>
			<CloudinaryContext cloudName="quickstlabs">
				<Image className={product.profile_product_image} publicId={productImages[0] && productImages[0].public_id}>
					<Transformation height="122" width="146" crop="fill" />
				</Image>
			</CloudinaryContext>
			{/* <div className="vendor_product_body"> */}
			<p className={product.vendor_product_name}>{name}</p>
			<p className={product.vendor_product_price}>${price}</p>

		</div>
	);
};

export default Product;