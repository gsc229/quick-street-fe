import React from "react";
import Product from "./Product";

const VendorProducts = ({ products, addProduct }) => {
  return (
    <div>
      <h2>Products</h2>
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
  );
};

export default VendorProducts;
