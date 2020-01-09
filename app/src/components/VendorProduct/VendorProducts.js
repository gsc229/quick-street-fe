import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const VendorProducts = ({ productIds, products, addProduct }) => {
  const [productImagesIds, setProductImagesIds] = useState([]);

  // **************** old way, forEach doesn't work **************
  // useEffect(() => {
  //   let temp_ids = [];
  //   productIds.forEach(id => {
  //     axios
  //       .get(
  //         `https://quickstlabs.herokuapp.com/api/v1.0/products/${id}/product-images`
  //       )
  //       .then(res => temp_ids.push(res.data.data[0].public_id));
  //   });
  //   console.log(`temp_ids`, temp_ids);
  //   setProductImagesIds(temp_ids);
  // }, [products]);

  useEffect(() => {
    let temp_ids = [];
    async function fetchImageIds() {
      if (productIds.length !== 0) {
        for (const ids of productIds) {
          const imageIds = await axios.get(
            `https://quickstlabs.herokuapp.com/api/v1.0/products/${ids}/product-images`
          );

          temp_ids.push(imageIds.data.data[0].public_id);
        }
      }

      setProductImagesIds(temp_ids);
    }
    fetchImageIds();
  }, [productIds]);

  if (products.length !== 0 && productImagesIds.length !== 0) {
    for (let i = 0; i < products.length; i++) {
      products[i].imageId = productImagesIds[i];
    }
  }

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
            <Product key={idx} name={p.name} price={p.price} img={p.imageId} />
          ))
        ) : (
          <p>you don't have any product yet</p>
        )}
      </div>
    </div>
  );
};

export default VendorProducts;
