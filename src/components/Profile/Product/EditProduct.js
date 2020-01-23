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

  console.log('EditProduct product ', product);
  console.log('EditingProduct images: ', images)
  useEffect(() => {
    // get product details
    axiosWithAuth()
      /* ${props.product_id} */
      .get(`/products/5e1c9cedcb86ae00173f8aee`)
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
      .get(`/products/5e1c9cedcb86ae00173f8aee/product-images`)
      .then((response) => {
        // console.log(response);
        setImages(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadingImages]);

  const handleChanges = (e) => {
    setProduct({
      ...product,
      [e.targe.name]: e.target.value
    })
  }

  const finishedEditing = () => {
    props.setEditingProd(false);
  }

  return (
    <div className={editingProduct.container}>

      <div className={`${editingProduct.edit_product_left} ${editingProduct.inner_container}`}>

        <div className={editingProduct.left_upper_container}>
          <div className={editingProduct.add_image_btns}>
            <ProductImageUploader productId={product._id} setReloadingImages={setReloadingImages} />
          </div>

          <div className={editingProduct.images_container}>
            {images.map(image =>
              <div key={image._id} className={editingProduct.image_wrapper}>
                <i className="fa fa-minus-circle"></i>
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
          <button className={editingProduct.delete_product_btn}>
            <i className="fa fa-exclamation-triangle"></i>   Delete Product
                </button>
        </div>




      </div>{/* LEFT */}
      {/* RIGHT */}

      <div className={`${editingProduct.edit_product_right} ${editingProduct.inner_container}`}>
        <div onClick={() => setEditingDetails(!editingDetails)}>
          {editingDetails ? <h4> <i className="fa fa-check-circle"></i> Commit Changes</h4> : <h4><i className="fa fa-edit"></i>Edit Details</h4>}

        </div>


        {editingDetails ? <EditProductForm product={product} /> :
          <div className={editingProduct.details_container} >


            <div className={editingProduct.details_wrapper}>


              <div className={editingProduct.input_wrapper}>
                <label htmlFor="">Product Name: </label>
                <p>{product.name}</p>
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

    </div>
  )
}

export default EditProduct
