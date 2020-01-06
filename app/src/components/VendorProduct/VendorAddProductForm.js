import React, { useState, useRef } from "react";
import upload from "../../assets/upload.png";
import productImg from "../../assets/rectangle75.png";

const VendorAddProductForm = ({ modal, addProductformClickHandler }) => {
  const productPictureUploader = useRef(null);

  const [product, setProduct] = useState({
    name: "",
    price: ""
  });

  const uploadProductPicture = e => {
    productPictureUploader.current.click();
  };

  const productPictureChangeHandler = e => {
    console.log(`product picture change`);
  };

  const changeHandler = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(`upload a product`);
  };

  return (
    <div
      className={
        modal
          ? "vendor_add_product_form_container_show"
          : "vendor_add_product_form_container"
      }
    >
      <form className="vendor_add_product_form" onSubmit={onSubmit}>
        <div className="input_wrapper">
          <div className="vendor_product_container">
            <img
              className="vendor_product_image"
              src={productImg}
              alt="vendor product"
            />
            <input
              className="vendor_product_input"
              type="file"
              ref={productPictureUploader}
              onChange={productPictureChangeHandler}
            />
            <img
              className="vendor_product_picture_upload"
              src={upload}
              alt="upload icon"
              onClick={uploadProductPicture}
            />
          </div>
        </div>

        <div className="input_wrapper">
          <label>Name of item</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeHandler}
          />
        </div>
        <div className="input_wrapper">
          <label>Price Point</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={changeHandler}
          />
        </div>
        <div className="vendor_product_btn_group">
          <button onClick={addProductformClickHandler}>Cancel</button>
          <button>save</button>
        </div>
      </form>
    </div>
  );
};

export default VendorAddProductForm;
