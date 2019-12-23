import React from "react";

const Product = ({ name, img, price }) => {
  return (
    <div className="vendor_product">
      <img src={img} className="vendor_product_image" alt="..." />
      <div className="vendor_product_body">
        <h5 className="vendor_product_name">{name}</h5>
        <p className="vendor_product_price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
