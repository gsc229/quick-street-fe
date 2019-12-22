import React from "react";
import Product from "./Product";

const VendorProducts = ({ products, addProduct }) => {
  return (
    <div>
      <p>Products</p>
      <button className="add_product_btn" onClick={addProduct}>
        Add product
      </button>
      <div className="vendor_product_list_container">
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
