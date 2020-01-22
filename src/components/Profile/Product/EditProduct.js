import React, { useState, useEffect } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import editingProduct from '../../../styles/css/editingProduct.module.css'

const EditProduct = (props) => {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
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


  const finishedEditing = () => {
    props.setEditingProd(false);
  }

  return (
    <div className={editingProduct.container}>


      <div className={`${editingProduct.edit_product_left} ${editingProduct.inner_container}`}>
        {images.map(image =>
          <div key={image._id} className={editingProduct.image_wrapper}>
            <i className="fa fa-minus-circle"></i>
            <CloudinaryContext cloudName="quickstlabs">
              <Image publicId={image.public_id}>
                <Transformation width="200" crop="scale" />
              </Image>
            </CloudinaryContext>
          </div>
        )}
        <button className={`btn btn-success ${editingProduct.add_image_btn}`}>
          <i className="fa fa-plus-circle"></i> Add Image</button>
      </div>


      <div className={`${editingProduct.edit_product_right} ${editingProduct.inner_container}`}>
        <i className="fa fa-edit"></i>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className={editingProduct.btn_container}>
          <button
            onClick={finishedEditing}
            className="btn btn-success">
            <i className="fa fa-check"></i> Finished Editing
         </button>
          <button className="btn btn-danger">
            <i className="fa fa-exclamation-triangle"></i>   Delete this item
        </button>
        </div>

      </div>

    </div>
  )
}

export default EditProduct
