import React, { useState, useEffect } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import editingProduct from '../../../styles/css/editingProduct.module.css'
import upload from '../../../assets/images/Profile/upload.png';
import productImg from '../../../assets/images/Profile/rectangle75.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EditProductForm, ProductImageUploader } from '../../index';

const EditProduct = (props) => {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [reloadingImages, setReloadingImages] = useState(false);
  const [editingDetails, setEditingDetails] = useState(false);
  const [detailsSaved, setDetailsSaved] = useState(false);
  const [allChangesSaved, setAllChangesSaved] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  console.log('EditProduct product ', product);
  console.log('EditingProduct images: ', images)
  useEffect(() => {
    // get product details
    axiosWithAuth()
      /* ${props.product_id} */
      .get(`/products/${props.product_id}`)
      .then((response) => {
        // console.log(response);
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // get all images of same product in previous request.
    axiosWithAuth()
      /* ${props.product_id} */
      .get(`/products/${props.product_id}/product-images`)
      .then((response) => {
        // console.log(response);
        setImages(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadingImages]);


  const finishedEditing = () => {
    setAllChangesSaved(true);
    setTimeout(function () {

      setAllChangesSaved(false);
      props.setEditingProd(false);

    }, 2000)

  }

  const submitProductDetails = () => {
    const vendorId = localStorage.getItem('user_id');
    setDetailsSaved(true);
    setTimeout(function () { setDetailsSaved(false) }, 1500)

    console.log("PUT subitProd.Details payload: ", { ...product })

    axiosWithAuth()
      .put(`/products/${product._id}`, { ...product, vendorId })
      .then(res => {
        console.log('PUT res EditProduct.js submitProd.Details: res ', res)
      })
      .catch(err => {
        console.log('PUT error & product_id & token:::', err,
          product._id,
          localStorage.getItem('token')
        );
      })
  }

  const deleteImage = (image_id) => {

    axiosWithAuth()
      .delete(`/product-images/${image_id}`)
      .then(res => {
        console.log('DELETE deleteImage EditProduct.js: ', res);
        setReloadingImages(!reloadingImages);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteProduct = () => {
    axiosWithAuth()
      .delete(`/products/${props.product_id}`)
      .then(response => {
        console.log('DELETE EditProduct.js deleteProduct :', response);
      })
      .catch(err => {
        console.log('Error DELETE EditProduct.js deleteProduct', err);
      })
  }

  return (
    <div className={editingProduct.container}>
      <i onClick={() => props.setEditingProd(false)} className={`fa fa-times ${editingProduct.close_x}`} ></i>
      {/* all saved MODAL */}
      {
        allChangesSaved &&
        <div className={editingProduct.all_saved_modal}>
          <h3> <i className="fa fa-check"></i>All your changes to "<span>{product.name}</span>" have been saved! </h3>
        </div>
      }

      {/* details saved MODAL */}
      {
        confirmClose &&
        <div className={editingProduct.confirm_close_modal}>
          <h3> <i className="fa fa-exclamation"></i>Are you sure you want to close? Make sure your changes to "<span>{product.name}</span>" have been saved! </h3>
          <button className="btn btn-danger">Close</button>
        </div>
      }

      {/* ============= LEFT ============================ */}
      <div className={`${editingProduct.edit_product_left} ${editingProduct.inner_container}`}>

        <div className={editingProduct.left_upper_container}>
          <div className={editingProduct.add_image_btns}>
            <ProductImageUploader
              productId={product._id}
              setReloadingImages={setReloadingImages}
              reloadingImages={reloadingImages} />
          </div>

          <div className={editingProduct.images_container}>
            {images.map(image =>
              <div key={image._id} className={editingProduct.image_wrapper}>
                {/* <p>{image._id}</p> */}
                <i onClick={() => deleteImage(image._id)} className="fa fa-minus-circle"></i>
                <CloudinaryContext cloudName="quickstlabs">
                  <Image publicId={image.public_id}>
                    <Transformation width="150" height="150" crop="fill" />
                  </Image>
                </CloudinaryContext>
              </div>
            )}

          </div>
        </div>


        <div className={editingProduct.btn_container}>
          <button
            onClick={finishedEditing}
            className={editingProduct.finished_editing_btn}>
            <i className="fa fa-check"></i> Finished Editing
                </button>
          <button onClick={deleteProduct} className={editingProduct.delete_product_btn}>
            <i className="fa fa-exclamation-triangle"></i>   Delete Product
          </button>
        </div>




      </div>{/* END LEFT */}
      {/* ============= RIGHT ============================ */}

      <div className={`${editingProduct.edit_product_right} ${editingProduct.inner_container}`}>
        <div onClick={() => setEditingDetails(!editingDetails)}>
          {editingDetails ? <h4 onClick={submitProductDetails} > <i className="fa fa-check-circle"></i> Commit Changes</h4> : <h4><i className="fa fa-edit"></i>Edit Details</h4>}

        </div>
        {/* details saved MODAL */}
        {detailsSaved && <div className={editingProduct.details_saved_modal}>
          <h3><i className="fa fa-check"></i> Product Details Saved!</h3>
        </div>}

        {editingDetails ? <EditProductForm product={product} setProduct={setProduct} /> :
          <div className={editingProduct.details_container} >


            <div className={editingProduct.details_wrapper}>


              <div className={editingProduct.input_wrapper}>
                <label htmlFor="">Product Name: </label>
                <h1>{product.name}</h1>
              </div>

              <div className={editingProduct.input_wrapper}>
                <label htmlFor="">Product Description: </label>
                <p>{product.description}</p>
              </div>

              <div className={editingProduct.input_wrapper}>
                <label htmlFor="diet">Dietary Category: </label>
                <p>{product.diet}</p>
              </div>
              <div className={editingProduct.input_wrapper}>
                <label htmlFor="category">Food Category: </label>
                <p>{product.category}</p>
              </div>

              <div className={editingProduct.input_wrapper}>
                <label htmlFor="">Price: </label>
                <p>${product.price}</p>
              </div>

            </div>
          </div>
        }

      </div>

    </div >
  )
}

export default EditProduct
