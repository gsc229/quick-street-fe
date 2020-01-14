import React, { useState, useEffect } from "react";
import VendorAbout from "./VendorAbout";
import VendorProducts from "../VendorProduct/VendorProducts";
import VendorAddProductForm from "../../components/VendorProduct/VendorAddProductForm";
import picture from "../../assets/placeholder.png";
import VendorBulletin from "../VendorBulletin/VendorBulletin";
//Styles
import profile from "../../styles/css/vendor_profile.module.css";
import banner from "../../styles/css/vendor_banner.module.css";
//Font awesom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPen, faUpload } from "@fortawesome/free-solid-svg-icons";

import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import axios from "axios";

const VendorProfile = props => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [vendorInfo, setVendorInfo] = useState({ location: "" });
  const [bannerInfo, setBannerInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [productImagesIds, setProductImagesIds] = useState([]);
  const [info, setInfo] = useState({
    business_name: "",
    days: "0",
    phone: "",
    about: "",
    hour_from: "",
    hour_to: "",
    location: ""
  });
  const vendorId = props.match.params.id;
  const [editAbout, setEditAbout] = useState(false);
  const [editBusinessName, setEditBusinessName] = useState(false);
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
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`,

        { ...vendorInfo, vendor_banner: `${bannerInfo}` }
      );
    }
  );

  useEffect(() => {
    async function fetchVendorInfo() {
      try {
        const vendorInfo = await axios.get(
          `https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`
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
          `https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}/products`
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

  const editName = () => {
    setEditBusinessName(true);
  };

  const saveName = e => {
    e.preventDefault();
    axios
      .put(`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`, {
        ...vendorInfo,
        business_name: info.business_name
      })
      .then(res => {
        console.log(`update vendor info`, res);
        setVendorInfo(res.data.data);
      });
  };

  const editProfile = () => {
    console.log(`edit profile clicked`);
    setEditAbout(true);
  };

  const saveProfile = e => {
    e.preventDefault();
    axios
      .put(`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`, {
        ...vendorInfo,
        hours: `${info.hour_from}_${info.hour_to}`,
        location: { ...vendorInfo.location, zipcode: info.location },
        days_of_week: info.days,
        phone: info.phone,
        description: info.about
      })
      .then(res => {
        console.log(`update vendor info`, res);
        setVendorInfo(res.data.data);
      });
  };

  const uploadBanner = e => {
    e.preventDefault();
    myWidget.open();
  };



  console.log('banner pen: ', document.getElementById(`${banner.pen}`))
  console.log('editingName: ', editingName)
  return (
    <div className={profile.vendor_profile_container}>
      <div className={profile.vendor_header_container}>
        <h1>Market Avenue</h1>


        <div id={profile.hamburger_dropdown}>
          <span id={profile.closebtn} onClick={() => setShow(!show)}>
            <span class={profile.line1}></span>
            <span class={profile.line2}></span>
            <span class={profile.line3}></span>
          </span>

          <div className={show ? profile.hamburger_dropdown_links : profile.no_drop}>
            <p className={profile.header_about}>About</p>
            <p className={profile.header_food}>Food</p>
            <p className={profile.header_business_name}>
              {vendorInfo.business_name}
            </p>
          </div>

        </div>

        <div className={profile.header_links}>
          <p className={profile.header_about}>About</p>
          <p className={profile.header_food}>Food</p>
          <p className={profile.header_business_name}>
            {vendorInfo.business_name}
          </p>
        </div>
      </div>

      <div className={banner.vendor_banner_container}>
        <div className={banner.banner_text_btns}>
          <div className={banner.vendor_header_name}>
            <input

              onChange={e =>
                setInfo({ ...info, business_name: e.target.value })
              }
              value={
                editBusinessName ? info.business_name : vendorInfo.business_name
              }
              className={editingName ? banner.glowing_border : 'none'}
            />
          </div>

          <div className={banner.vendor_profile_btn_group}>
            <FontAwesomeIcon
              id={banner.pen}
              className={`${banner.icon} " " ${editingName ? banner.red_edit : banner.normal_pen}`}
              icon={faPen}
              onClick={() => {
                editName();
                setEditingName(!editingName);
              }}
            />
            <FontAwesomeIcon
              id={banner.save}
              className={banner.icon}
              icon={faSave}
              onClick={(e) => { saveName(e); setEditingName(false); }}

            />

            {/* <img src={create} alt='create' onClick={editProfile} />
            <img src={save} alt='save' onClick={saveProfile} /> */}
          </div>
        </div>

        <div className={banner.vendor_banner_image_container}>
          {bannerInfo !== `no-photo.jpg` ? (
            <CloudinaryContext cloudName="quickstlabs">
              <Image
                className={banner.vendor_banner_image}
                publicId={bannerInfo}
              >
                <Transformation
                  gravity="center"
                  height="318"
                  width="1062"
                  crop="fill"
                />
              </Image>
            </CloudinaryContext>
          ) : (
              <img
                className="vendor_banner_image"
                src={picture}
                alt="vendor header"
              />
            )}
          <div className={banner.vendor_banner_upload}>
            <FontAwesomeIcon
              id={banner.upload}
              className={banner.icon}
              icon={faUpload}
              onClick={uploadBanner}
            />
            {/* <img
              src={upload}
              alt='upload icon'
              onClick={uploadBanner}
            /> */}
          </div>{" "}
        </div>
      </div>

      <VendorAbout
        vendorInfo={vendorInfo}
        info={info}
        setInfo={setInfo}
        editAbout={editAbout}
        editProfile={editProfile}
        saveProfile={saveProfile}
      />

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
        vendorId={vendorId}
      />
      <VendorBulletin vendorId={vendorId} />
    </div >
  );
};

export default VendorProfile;
