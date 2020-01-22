import React, { useState } from 'react';
import { Product, EditProduct } from '../../index'
import product_list from '../../../styles/css/vendor_products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const VendorProducts = ({ products, addProduct }) => {
	const [editingProd, setEditingProd] = useState(true);
	const [editingProdId, setEditingProdId] = useState("");

	console.log(editingProd)
	console.log("VendorProducts.js products: ", products);

	const showEditProduct = (prodId) => {
		setEditingProdId(prodId);
		setEditingProd(!editingProd);
		console.log(`Editing Product Id: `, prodId);
	}


	return (
		<div className={product_list.vendor_product_list_container}>
			{editingProd &&
				<EditProduct setEditingProd={setEditingProd} product_id={editingProdId} />
			}
			<header className={product_list.vendor_product_list_title}>Products</header>

			<div className={product_list.vendor_product_list_wrapper}>
				<button className="add_product_btn" onClick={addProduct}>
					<FontAwesomeIcon icon={faPlus} />
					Add product <br />
				</button>
				{products ? (
					products.map((p, idx) => (
						<div
							onClick={() => { showEditProduct(p._id) }}
							className="product-wrapper">
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
	);
};

export default VendorProducts;
