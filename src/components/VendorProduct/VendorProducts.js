import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
import product_list from '../../styles/css/vendor_products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const VendorProducts = ({ products, addProduct }) => {
	return (
		<div className={product_list.vendor_product_list_container}>
			<header className={product_list.vendor_product_list_title}>Products</header>
			{/* <div className={product_list.vendor_product_list_title}>
        <p>Products</p>
      </div> */}
			<div className={product_list.vendor_product_list_wrapper}>
				<button className="add_product_btn" onClick={addProduct}>
					<FontAwesomeIcon icon={faPlus} />
					Add product <br />
				</button>
				{products ? (
					products.map((p, idx) => (
						<Product
							key={idx}
							name={p.name}
							_id={p._id}
							price={p.price}
							img={p.imageId ? p.imageId : p.image_Id}
						/>
					))
				) : (
					<p>you don't have any product yet</p>
				)}
			</div>
		</div>
	);
};

export default VendorProducts;
