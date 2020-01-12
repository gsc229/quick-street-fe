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
  const [vendorInfo, setVendorInfo] = useState({ location: "" });
  const [bannerInfo, setBannerInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [productImagesIds, setProductImagesIds] = useState([]);
  const [info, setInfo] = useState({
    days: "0",
    phone: "",
    about: "",
    hour_from: "",
    hour_to: "",
    location: ""
  });

  const [edit, setEdit] = useState(false);

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
      cropping: true, // if true multiple must be false, set to false [set multiple to true] to upload multiple files
      multiple: false,
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
    async (error, result) => {
      if (!error && result && result.event === "success") {
        const banner_info = await result.info;
        setBannerInfo(banner_info.public_id);
      }
      axios.put(
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5e1410234df7fc0fb0a5a5dc`,

        { ...vendorInfo, vendor_banner: `${bannerInfo}` }
      );
    }
  );

  useEffect(() => {
    async function fetchVendorInfo() {
      try {
        const vendorInfo = await axios.get(
          `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5e1410234df7fc0fb0a5a5dc`
        );
        console.log(`vendorinfo changed`, vendorInfo);
        setVendorInfo(vendorInfo.data.data);
        setBannerInfo(vendorInfo.data.data.vendor_banner);
      } catch (e) {
        console.log(e);
      }
    }
    fetchVendorInfo();

    async function fetchProducts() {
      try {
        const products = await axios.get(
          `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5e1410234df7fc0fb0a5a5dc/products`
        );

        setProducts(products.data.data);
        setProductIds(products.data.data.map(p => p._id));
      } catch (e) {
        console.log(e);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let temp_ids = [];
    async function fetchImageIds() {
      if (productIds.length !== 0) {
        for (const ids of productIds) {
          try {
            const imageIds = await axios.get(
              `https://quickstlabs.herokuapp.com/api/v1.0/products/${ids}/product-images`
            );
            console.log(imageIds);
            temp_ids.push(imageIds.data.data[0].public_id);
          } catch (e) {
            console.log(e);
          }
        }
      }

      setProductImagesIds(temp_ids);
    }
    fetchImageIds();
  }, [productIds]);

  if (products.length !== 0 && productImagesIds.length !== 0) {
    for (let i = 0; i < products.length; i++) {
      products[i].imageId = productImagesIds[i];
    }
  }
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

  const saveProfile = e => {
    e.preventDefault();
    axios
      .put(
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5e1410234df7fc0fb0a5a5dc`,
        {
          ...vendorInfo,
          hours: `${info.hour_from}_${info.hour_to}`,
          location: { ...vendorInfo.location, zipcode: info.location },
          days_of_week: info.days,
          phone: info.phone,
          description: info.about
        }
      )
      .then(res => {
        console.log(`update vendor info`, res);
        setVendorInfo(res.data.data);
      });
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
        {bannerInfo !== `no-photo.jpg` ? (
          <CloudinaryContext cloudName="quickstlabs">
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
      <VendorAbout
        vendorInfo={vendorInfo}
        info={info}
        setInfo={setInfo}
        edit={edit}
      />
      <VendorBulletin />
      <VendorProducts
        productIds={productIds}
        products={products}
        addProduct={addProduct}
      />
      <VendorAddProductForm
        productIds={productIds}
        modal={modal}
        products={products}
        addProduct={addProduct}
        setProducts={setProducts}
        setModal={setModal}
        addProductformCancelHandler={addProductformCancelHandler}
      />
    </div>
  );
};

export default VendorProfile;
