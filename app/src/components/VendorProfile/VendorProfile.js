import React, { useState } from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "./VendorProducts";
import VendorAddProductForm from "./VendorAddProductForm";
import picture from "../../assets/placeholder.png";
import VendorBulletin from "./VendorBulletin";

const VendorProfile = () => {
  const [modal, setModal] = useState(false);

  const addProduct = () => {
    setModal(true);
  };

  const addProductformClickHandler = () => {
    setModal(false);
  };

  return (
    <div className="vendor_profile_container">
      <div className="vendor_profile_btn_group">
        <button>Edit</button>
        <button>Save</button>
      </div>
      <img className="vendor_header_image" src={picture} alt="vendor header" />
      <nav className="vendor_profile_nav">
        <ul>
          <li>About</li>
          <li>Bulletin</li>
          <li>Products</li>
        </ul>
      </nav>
      <VendorAbout />
      <VendorBulletin />
      <VendorProducts addProduct={addProduct} />
      <VendorAddProductForm
        modal={modal}
        addProductformClickHandler={addProductformClickHandler}
      />
    </div>
  );
};

export default VendorProfile;
