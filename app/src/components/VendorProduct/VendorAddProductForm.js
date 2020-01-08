import React, { useState } from "react";
import upload from "../../assets/upload.png";
import productImg from "../../assets/rectangle75.png";
import { Image, CloudinaryContext } from "cloudinary-react";
import axios from "axios";

const VendorAddProductForm = ({ modal, addProductformClickHandler }) => {
  const [productPictureInfo, setProductPictureInfo] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dxhescd0s",
      uploadPreset: "quickstreet"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        const info = result.info;
        let newInfo = {};
        Object.keys(info).forEach(k => {
          if (k !== "eager") {
            if (!newInfo[k]) {
              newInfo[k] = info[k];
            }
          }
        });
        newInfo = { ...newInfo, vendor: "5dfc1ea2396390001715f1e3" };
        setProductPictureInfo(newInfo);
      }
    }
  );

  const uploadProductPicture = e => {
    e.preventDefault();
    myWidget.open();
  };

  const changeHandler = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const res_1 = await axios.post(
      `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5dfc1ea2396390001715f1e3/products`,
      {
        diet: ["Vegan"],
        name: product.name,
        description: "test description",
        category: "test cat",
        price: product.price
      }
    );
    const productId = res_1.data.data._id;
    console.log(productId);
    const res_2 = await axios.post(
      `https://quickstlabs.herokuapp.com/api/v1.0/products/${productId}/product-images`,
      productPictureInfo
    );
    console.log(res_2);
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
            {productPictureInfo.public_id ? (
              <CloudinaryContext cloudName="dxhescd0s">
                <Image
                  className="vendor_product_image"
                  publicId={productPictureInfo.public_id}
                  width="50"
                  height="100"
                />
              </CloudinaryContext>
            ) : (
              <img
                className="vendor_product_image"
                src={productImg}
                alt="product"
              />
            )}
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
