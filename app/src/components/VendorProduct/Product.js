import React from "react";
import { Image, CloudinaryContext } from "cloudinary-react";

const Product = ({ name, img, price }) => {
  return (
    <div className="vendor_product">
      <CloudinaryContext cloudName="quickstlabs">
        <Image className="vendor_banner_image" publicId={img} width="50" />
      </CloudinaryContext>
      <div className="vendor_product_body">
        <h5 className="vendor_product_name">{name}</h5>
        <p className="vendor_product_price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
