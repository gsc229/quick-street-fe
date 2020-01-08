import React, { useState, useEffect } from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "../VendorProduct/VendorProducts";
import VendorAddProductForm from "../../components/VendorProduct/VendorAddProductForm";
import picture from "../../assets/placeholder.png";
import create from "../../assets/create.png";
import save from "../../assets/save.png";
import upload from "../../assets/upload.png";
import VendorBulletin from "../VendorBulletin/VendorBulletin";

import { Image, CloudinaryContext } from "cloudinary-react";
import axios from "axios";

const VendorProfile = () => {
  const [modal, setModal] = useState(false);
  const [vendorInfo, setVendorInfo] = useState("");
  const [bannerInfo, setBannerInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);

  const [edit, setEdit] = useState(false);

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dxhescd0s",
      uploadPreset: "quickstreet"
    },
    async (error, result) => {
      if (!error && result && result.event === "success") {
        const banner_info = await result.info;
        setBannerInfo(banner_info.public_id);
        axios
          .put(
            `https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorInfo.id}`,
            {
              avatar: "test",
              vendor_banner: bannerInfo.public_id,
              vendor_category: ["Vegetables"],
              email: "placeholder@theoffice.com",
              password: "placeholder123",
              phone: "555-555-5555",
              business_name: "placeholder's Beets",
              description: "Root vegies",
              address: "100 Terminal Dr, Avoca, PA 18641-2221, US"
            }
          )
          .then(res => console.log(`response from put`, res.data.data));
      }
    }
  );

  useEffect(() => {
    axios
      .get(
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5dfc1ea2396390001715f1e3`
      )
      .then(res => {
        setVendorInfo(res.data.data);
        setBannerInfo(res.data.data.vendor_banner);
      });

    axios
      .get(
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5dfc1ea2396390001715f1e3/products`
      )
      .then(p => {
        setProducts(p.data.data);
        setProductIds(p.data.data.map(p => p._id));
      });
  }, []);

  console.log(`products`, products);
  console.log(`product ids`, productIds);

  const addProduct = () => {
    setModal(true);
  };

  const addProductformCancelHandler = e => {
    e.preventDefault();
    setModal(false);
  };

  const editProfile = () => {
    setEdit(true);
  };

  const saveProfile = () => {
    console.log(`save profile`);
  };

  const uploadBanner = e => {
    e.preventDefault();
    myWidget.open();
  };

  return (
    <div className="vendor_profile_container">
      <div className="vendor_header_container">
        <div className="vendor_profile_name">
          <p>Name</p>
          <p>Annie's Eclairs</p>
        </div>
        <div className="vendor_profile_btn_group">
          <img src={create} alt="create" onClick={editProfile} />

          <img src={save} alt="save" onClick={saveProfile} />
        </div>
      </div>
      <div className="vendor_banner_container">
        {bannerInfo ? (
          <CloudinaryContext cloudName="dxhescd0s">
            <Image
              className="vendor_banner_image"
              publicId={bannerInfo}
              width="50"
            />
          </CloudinaryContext>
        ) : (
          <img
            className="vendor_banner_image"
            src={picture}
            alt="vendor header"
          />
        )}
        <img
          className="vendor_banner_upload"
          src={upload}
          alt="upload icon"
          onClick={uploadBanner}
        />
      </div>
      <nav className="vendor_profile_nav">
        <ul>
          <li>About</li>
          <li>Bulletin</li>
          <li>Products</li>
        </ul>
      </nav>
      <VendorAbout vendorInfo={vendorInfo} edit={edit} />
      <VendorBulletin />
      <VendorProducts
        productIds={productIds}
        products={products}
        addProduct={addProduct}
      />
      <VendorAddProductForm
        modal={modal}
        addProductformCancelHandler={addProductformCancelHandler}
      />
    </div>
  );
};

export default VendorProfile;
