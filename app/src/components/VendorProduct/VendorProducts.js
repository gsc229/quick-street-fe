import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import product_list from "../../styles/css/vendor_products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const VendorProducts = ({ products, addProduct }) => {
  return (
    <div className={product_list.vendor_product_list_container}>
      <div className={product_list.vendor_product_list_title}>
        <p>Products</p>
        <hr />
      </div>
      <div className={product_list.vendor_product_list_wrapper}>
        <button className={product_list.add_product_btn} onClick={addProduct}>
          Add product <br />
          <FontAwesomeIcon icon={faPlus} />
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
