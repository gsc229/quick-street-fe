import React, { useState, useEffect } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import editingProduct from '../../../styles/css/editingProduct.module.css'
import upload from '../../../assets/images/Profile/upload.png';
import productImg from '../../../assets/images/Profile/rectangle75.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditProduct = (props) => {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [editingDetails, setEditingDetails] = useState(false);
  console.log('EditProduct product ', product);
  console.log('EditingProduct images: ', images)
  useEffect(() => {
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
  }, []);

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

        <div className={editingProduct.add_image_btns}>
          {/* <button className="add_product_btn">
            <FontAwesomeIcon icon={faPlus} />
            Add product <br />
          </button> */}
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




      </div>{/* LEFT */}


      <div className={`${editingProduct.edit_product_right} ${editingProduct.inner_container}`}>
        <h4 onClick={() => setEditingDetails(!editingDetails)} ><i className="fa fa-edit"></i>Edit Details</h4>
        {editingDetails ? <h1>You'll be eiding</h1> :
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
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
          </div>




        }

      </div>

    </div>
  )
}

export default EditProduct
