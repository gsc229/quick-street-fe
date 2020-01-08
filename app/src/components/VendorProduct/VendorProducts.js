import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const VendorProducts = ({ productIds, products, addProduct }) => {
  const [productImagesIds, setProductImagesIds] = useState([]);

  useEffect(() => {
    let temp_ids = [];
    productIds.forEach(id => {
      axios
        .get(
          `https://quickstlabs.herokuapp.com/api/v1.0/products/${id}/product-images`
        )
        .then(res => {
          temp_ids.push(res.data.data[0].public_id);
        });
    });

    setProductImagesIds(temp_ids);
  }, [productIds]);
  console.log(`product`, products);
  console.log(`imageid`, productImagesIds);
  return (
    <div className="vendor_product_list_container">
      <div className="vendor_product_list_title">
        <p>Products</p>
        <hr />
      </div>
      <div className="vendor_product_list_wrapper">
        <button className="add_product_btn" onClick={addProduct}>
          Add product
        </button>
        {products ? (
          products.map((p, idx) => (
            <Product key={idx} name={p.name} price={p.price} img={p.img} />
          ))
        ) : (
          <p>you don't have any product yet</p>
        )}
      </div>
    </div>
  );
};

export default VendorProducts;
