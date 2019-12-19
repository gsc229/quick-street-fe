import React from "react";

const Product = ({ name, img, price }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default Product;
