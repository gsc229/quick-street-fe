import React from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

// styles
import shopping from '../../../styles/scss/shopping.module.scss';

const ShoppingCartItem = ({ product }) => {
	return (
		<React.Fragment>
			<div className={shopping.wrapper}>
				<div className={shopping.left}>
					{/* {console.log(product.item.product_image.thumbnail_url)} */}
					{product.item.product_image && (
						<CloudinaryContext cloudName="quickstlabs">
							<Image publicId={product.item.product_image.public_id}>
								<Transformation gravity="center" height="92" width="110" crop="fill" />
							</Image>
						</CloudinaryContext>
					)}
				</div>
				<div className={shopping.right}>
					<p>
						{product.quantity} {product.item.name}
					</p>
					<p>
						${product.item.price} per {product.item.unit}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ShoppingCartItem;
