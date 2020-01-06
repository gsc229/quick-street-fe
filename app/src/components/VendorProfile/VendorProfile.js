import React, { useState, useRef, useEffect } from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "../VendorProduct/VendorProducts";
import VendorAddProductForm from "../../components/VendorProduct/VendorAddProductForm";
import picture from "../../assets/placeholder.png";
import create from "../../assets/create.png";
import save from "../../assets/save.png";
import upload from "../../assets/upload.png";
import VendorBulletin from "../VendorBulletin/VendorBulletin";
import rectangle from "../../assets/rectangle.png";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import axios from "axios";

const p = [
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  },
  {
    name: "product",
    price: "1.00",
    img: rectangle
  }
];

const VendorProfile = () => {
  const [modal, setModal] = useState(false);
  const [banner, setBanner] = useState(picture);
  const [bannerInfo, setBannerInfo] = useState("");
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dxhescd0s",
      uploadPreset: "quickstreet"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setBannerInfo(result.info);
      }
    }
  );

  console.log(bannerInfo);

  const addProduct = () => {
    setModal(true);
  };

  const addProductformClickHandler = () => {
    setModal(false);
  };

  const editProfile = () => {
    console.log(`edit profile`);
  };

  const saveProfile = () => {
    console.log(`save profile`);
  };

  const uploadBanner = e => {
    e.preventDefault();
    myWidget.open();
  };

  // useEffect(() => {
  //   return setBanner(
  //     `https://res.cloudinary.com/dkz9kcsqy/image/upload/v1578004173/zzgiw4e7tw8m2r8d10lv.png`
  //   );
  // });

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
        {bannerInfo.public_id ? (
          <CloudinaryContext cloudName="dxhescd0s">
            <Image
              className="vendor_banner_image"
              publicId={bannerInfo.public_id}
              width="50"
            />
          </CloudinaryContext>
        ) : (
          <img
            className="vendor_banner_image"
            src={banner}
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
      <VendorAbout />
      <VendorBulletin />
      <VendorProducts products={p} addProduct={addProduct} />
      <VendorAddProductForm
        modal={modal}
        addProductformClickHandler={addProductformClickHandler}
      />
    </div>
  );
};

export default VendorProfile;
