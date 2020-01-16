import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import product from "../../styles/scss/vendor_products.module.scss";

const Product = ({ name, img, price }) => {
  return (
    <div className={product.vendor_product}>

      <CloudinaryContext cloudName="quickstlabs" >
        <Image
          className={product.profile_product_image}
          publicId={img} >
          <Transformation height="122" width="146" crop="fill" />
        </Image> 
      </CloudinaryContext>
      {/* <div className="vendor_product_body"> */}
        <p className={product.vendor_product_name}>{name}</p>
        <p className={product.vendor_product_price}>${price}</p>
      {/* </div> */}
    </div>
  );
};

export default Product;
