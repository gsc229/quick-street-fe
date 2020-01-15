import React from 'react'
import banner from '../../styles/css/vendor_banner.module.css';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPen, faUpload } from "@fortawesome/free-solid-svg-icons";

/* This is the banner uploader! */

export default function BannerUploader(props) {

  const { vendorId, vendorInfo, setBannerInfo } = props

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
        console.log('BannerUpload.js UploadWidget banner_info ', banner_info)
        axiosWithAuth()
          .put(`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`,

            { ...vendorInfo, vendor_banner: `${banner_info.public_id}` }
          )
          .then(res => {
            setBannerInfo(banner_info.public_id);
          })
          .catch(err => {
            console.log('PUT VendorProfile.js Upload widget err', err)
          })

      }



    }
  );

  const uploadBanner = e => {
    e.preventDefault();
    myWidget.open();
  };

  return (
    <div className={banner.vendor_banner_upload}>
      <FontAwesomeIcon
        id={banner.upload}
        className={banner.icon}
        icon={faUpload}
        onClick={uploadBanner}
      />

    </div>
  )
}
