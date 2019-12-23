import React, { useState, useRef } from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "./VendorProducts";
import VendorAddProductForm from "./VendorAddProductForm";
import picture from "../../assets/placeholder.png";
import create from "../../assets/create.png";
import save from "../../assets/save.png";
import upload from "../../assets/upload.png";
import VendorBulletin from "./VendorBulletin";
import rectangle from "../../assets/rectangle.png";

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
  const bannerUploader = useRef(null);
  const [banner, setBanner] = useState(picture);

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

  const uploadBanner = () => {
    console.log(`upload banner`);

    bannerUploader.current.click();
  };

  const bannerChangeHandler = e => {
    console.log(Array.from(e.target.files));
    const newBanner = Array.from(e.target.files[0]);
    setBanner(newBanner);
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
        <img className="vendor_banner_image" src={banner} alt="vendor header" />
        <input
          className="vendor_banner_input"
          type="file"
          ref={bannerUploader}
          onChange={bannerChangeHandler}
        />
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
