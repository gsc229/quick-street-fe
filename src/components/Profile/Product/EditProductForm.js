import React from 'react'
import editingProduct from '../../../styles/css/editingProduct.module.css';

const EditProductForm = (props) => {

  const { product } = props;


  return (
    <div className={editingProduct.edit_product_form_container} >
      <form className={editingProduct.edit_product_form} >
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="name">Product Name: </label>
          <input type="text" name="name" value={product.name} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="description">Product Description: </label>
          <input type="text" name="descriptoin" value={product.description} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="diet">Dietary Category: </label>
          <input type="text" diet="diet" value={product.diet} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="category">Food Category: </label>
          <input type="text" category="category" value={product.category} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="price">Price: </label>
          <input type="text" price="price" value={product.price} />
        </div>

      </form>
    </div>
  )
}

export default EditProductForm
