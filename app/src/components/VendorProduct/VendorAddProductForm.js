import React, { useState } from "react";
import upload from "../../assets/upload.png";
import productImg from "../../assets/rectangle75.png";
import { Image, CloudinaryContext } from "cloudinary-react";
import axios from "axios";
import axiosWithAuth from '../../utils/axiosWithAuth';

const VendorAddProductForm = ({
  modal,
  setModal,
  setProducts,
  vendorId,
  products,
  addProductformCancelHandler
}) => {
  const [productPictureInfo, setProductPictureInfo] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "quickstlabs",
      uploadPreset: "product-images",
      sources: [
        "local",
        "url",
        "camera",
        "image_search",
        "facebook",
        "dropbox",
        "instagram"
      ],
      showAdvancedOptions: true,
      cropping: false, // if true multiple must be false, set to false [set multiple to true] to upload multiple files
      multiple: true,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          sourceBg: "#00B2ED",
          windowBorder: "#E1F6FA",
          tabIcon: "#2B3335",
          inactiveTabIcon: "#555a5f",
          menuIcons: "#5B5F63",
          link: "#00769D",
          action: "#21B787",
          inProgress: "#00769D",
          complete: "#21B787",
          error: "#E92323",
          textDark: "#2B3335",
          textLight: "#FFFFFF"
        },
        fonts: {
          default: null,
          "'Poppins', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Poppins",
            active: true
          }
        }
      }
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
        newInfo = { ...newInfo, vendor: vendorId };
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
    const res_1 = await axiosWithAuth().post(
      `https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}/products`,
      {
        diet: ["Vegan"],
        name: product.name,
        description: "test description",
        category: "test cat",
        price: product.price
      }
    );
    let productInfo = res_1.data.data;

    const res_2 = await axiosWithAuth().post(
      `https://quickstlabs.herokuapp.com/api/v1.0/products/${productInfo._id}/product-images`,
      productPictureInfo
    );

    // have a bug here !!!!!!!
    if (res_2.data.data.public_id) {
      productInfo = {
        image_Id: res_2.data.data.public_id,
        ...productInfo,

        etag: res_2.data.data.etag,
        test: "test"
      };
    }

    setModal(false);
    setProducts([...products, productInfo]);
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
        <header className='add_product_section_title'>Adding an Item</header>
        <div className='add_product_main_content'>
          <div className='left_side_add_item_form'>
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
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={changeHandler}
                placeholder='$'
              />
            </div>
          </div>

          <div className='right_side_add_item_form'>
            <div className="input_wrapper">
              <div className="vendor_product_image_container">
                {productPictureInfo.public_id ? (
                  <CloudinaryContext cloudName="quickstlabs">
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
          </div>
        </div>
        <div className="vendor_product_btn_group">
          <button className='cancel' onClick={addProductformCancelHandler}>Cancel</button>
          <button className='save'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default VendorAddProductForm;
