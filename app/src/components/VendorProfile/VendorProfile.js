import React from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "./VendorProducts";
import VendorAddProductForm from "./VendorAddProductForm";
import picture from "../../assets/placeholder.png";

const VendorProfile = () => {
  const addProduct = e => {
    e.preventDefault();
    console.log(`add product`);
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
          <li>Product</li>
        </ul>
      </nav>
      <VendorAbout />
      <VendorProducts addProduct={addProduct} />
      <VendorAddProductForm />
    </div>
  );
};

export default VendorProfile;
