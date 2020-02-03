import React from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import editingProduct from '../../../styles/scss/vendor/editingProduct.module.scss';
import upload from '../../../assets/images/Profile/upload.png';
import productImg from '../../../assets/images/Profile/rectangle75.png';
const ProductImageUploader = (props) => {

  const { productId, setReloadingImages, reloadingImages } = props;
  const vendorId = localStorage.getItem('user_id');



  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'quickstlabs',
      uploadPreset: 'product-images',
      sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram'],
      showAdvancedOptions: true,
      cropping: true, // if true multiple must be false, set to false [set multiple to true] to upload multiple files
      multiple: false,
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#FFFFFF',
          sourceBg: '#00B2ED',
          windowBorder: '#E1F6FA',
          tabIcon: '#2B3335',
          inactiveTabIcon: '#555a5f',
          menuIcons: '#5B5F63',
          link: '#00769D',
          action: '#21B787',
          inProgress: '#00769D',
          complete: '#21B787',
          error: '#E92323',
          textDark: '#2B3335',
          textLight: '#FFFFFF'
        },
        fonts: {
          default: null,
          "'Poppins', sans-serif": {
            url: 'https://fonts.googleapis.com/css?family=Poppins',
            active: true
          }
        }
      }
    },
    async (error, result) => {
      if (!error && result && result.event === 'success') {
        const image_info = await result.info;
        const correct_fields = {
          vendorId,
          product: productId,
          vendor: vendorId,
          public_id: image_info.public_id,
          version: image_info.version,
          signature: image_info.signature,
          width: image_info.width,
          height: image_info.height,
          format: image_info.format,
          resource_type: image_info.resource_type,
          created_at: image_info.created_at,
          tags: image_info.tags,
          bytes: image_info.bytes,
          type: image_info.type,
          etag: image_info.etag,
          placeholder: image_info.placeholder,
          url: image_info.url,
          secure_url: image_info.secure_url,
          access_mode: image_info.access_mode,
          original_filename: image_info.original_filename,
          path: image_info.path,
          thumbnail_url: image_info.thumbnail_url
        }
        //console.log('ProductImageUploader.js resut.info: ', image_info);
        //console.log('ProductImageUploader.js productId ', productId);
        //console.log('ProductImageUploader.js vendorId ', vendorId);

        axiosWithAuth()
          .post(`/products/${productId}/product-images`, correct_fields)
          .then(res => {
            console.log('POST ProductImagesUploader res: ', res);
            setReloadingImages(!reloadingImages)
          })
          .catch((err) => {
            console.log('PUT VendorProfile.js Upload widget err', err);
          });
      }
    }
  );

  const uploadImage = (e) => {
    e.preventDefault();
    myWidget.open();
  };

  return (
    <div onClick={uploadImage} >

      <div className={editingProduct.add_image_btns}>
        <img
          className={editingProduct.product_image_placeholder}
          src={productImg}
          alt="product"
        />
        <img
          className={editingProduct.image_upload_icon}
          src={upload}
          alt="upload icon"
        /* onClick={uploadProductPicture} */
        />
      </div>
    </div>
  );
}

export default ProductImageUploader
