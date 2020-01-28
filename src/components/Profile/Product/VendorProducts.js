import React, { useState } from 'react';
import { Product, EditProduct } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// styling
import profile from '../../../styles/scss/profile.module.scss';

const VendorProducts = ({ products, addProduct }) => {
	// Opens EditingProduct MODAL    // change back to false
	const [editingProd, setEditingProd] = useState(true);
	// Passed to EditingProdcut MODAL            // change back to ""
	const [editingProdId, setEditingProdId] = useState("5e1c9cedcb86ae00173f8aee");

	console.log(editingProd);
	console.log('VendorProducts.js products: ', products);

	const showEditProduct = (prodId) => {
		setEditingProdId(prodId);
		setEditingProd(!editingProd);
		console.log(`VenorProducts.js showEditingProduct prodId: `, prodId);
	};

	return (
		<div className={profile.products_container}>
			<div className={profile.products_wrapper}>
				{editingProd && <EditProduct setEditingProd={setEditingProd} product_id={editingProdId} />}
				<header className={profile.vendor_product_list_title}>Products</header>

				<div className={profile.vendor_product_list_wrapper}>
					<button className="add_product_btn" onClick={addProduct}>
						<FontAwesomeIcon icon={faPlus} />
						Add product <br />
					</button>
					{products ? (
						products.map((p, idx) => (
							<div
								onClick={() => {
									showEditProduct(p._id);
								}}
								className="product-wrapper"
							>
								<Product
									key={idx}
									name={p.name}
									_id={p._id}
									price={p.price}
									img={p.imageId ? p.imageId : p.image_Id}
								/>
							</div>
						))
					) : (
							<p>you don't have any product yet</p>
						)}
				</div>
			</div>
		</div>
	);
};

export default VendorProducts;
