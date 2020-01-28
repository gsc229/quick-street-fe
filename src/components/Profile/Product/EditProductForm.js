import React, { useState, useEffect } from 'react'
import editingProduct from '../../../styles/css/editingProduct.module.css';

const EditProductForm = (props) => {

  const { product, setProduct } = props;
  // this state is for pre selecting checkboxes.
  const [dietsOnFile, setDietsOnFile] = useState([]);
  console.log('product.diet: ', product.diet);
  console.log('dietsOnFile', dietsOnFile);

  useEffect(() => {

    setDietsOnFile(product.diet);

  }, [product]);



  const handleChanges = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSelect = (e) => {

    if (e.target.checked) {
      console.log('Checked!', e.target.checked)
      if (product.diet.indexOf(e.target.value) === -1) {
        console.log('NOTHING HERE WITH VALUE: ', e.target.value);
        console.log('ADDING: ', e.target.value);
        setProduct({
          ...product,
          [e.target.name]: [...product[e.target.name], e.target.value]

        })
      } else {
        console.log('ALREADY GOT THAT!');
      }
    }

    if (!e.target.checked) {
      if (product.diet.indexOf(e.target.value) !== -1) {
        console.log('REMOVING VALUE: ', e.target.value)
        let newArray = product.diet.filter(item => {
          return item !== e.target.value;
        })
        console.log('NEW ARRAY WILL BE: ', newArray)
        setProduct({
          ...product,
          [e.target.name]: newArray
        })

      } else {
        console.log(`${e.target.value} NOT HERE ANYWAY!`)
      }
    }


    /* setProduct({
      ...product,
      [e.target.name]: []

    }) */
  }

  return (
    <div className={editingProduct.edit_product_form_container} >
      <form className={editingProduct.edit_product_form} >
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="name">Product Name: </label>
          <input onChange={handleChanges} type="text" name="name" value={product.name} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="description">Product Description: </label>
          <textarea onChange={handleChanges} type="text" name="description" value={product.description} />
        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="diet">Dietary Category: </label>
          <select name="diet" type='text' class="custom-select custom-select-lg mb-3">
            <option selected>Choose diet category</option>
            <option value='Gluten Free'>Gluten Free</option>
            <option value='Vegetarian'>Vegetarian</option>
            <option value='Vegan'>Vegan</option>
            <option value='Keto'>Keto</option>
            <option value='Dairy Free'>Dairy Free</option>
          </select>
          <div className={`form-check ${editingProduct.checkbox_wrapper}`}>
            <div>
              <input checked={dietsOnFile && dietsOnFile.indexOf('Gluten Free') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${editingProduct.checkbox_input}`} name='diet' type="checkbox" value='Gluten Free' id="defaultCheck1" />
              <label className={`form-check-label ${editingProduct.checkbox_label}`} for="defaultCheck1">
                Gluten Free
              </label>
            </div>
            <div>
              <input checked={dietsOnFile && dietsOnFile.indexOf('Vegetarian') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${editingProduct.checkbox_input}`} name='diet' type="checkbox" value='Vegetarian' id="defaultCheck1" />
              <label className={`form-check-label ${editingProduct.checkbox_label}`} for="defaultCheck1">
                Vegetarian
              </label>
            </div>

            <div>
              <input checked={dietsOnFile && dietsOnFile.indexOf('Vegan') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${editingProduct.checkbox_input}`} name='diet' type="checkbox" value='Vegan' id="defaultCheck1" />
              <label className={`form-check-label ${editingProduct.checkbox_label}`} for="defaultCheck1">
                Vegan
              </label>
            </div>
            <div>
              <input checked={dietsOnFile && dietsOnFile.indexOf('Keto') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${editingProduct.checkbox_input}`} name='diet' type="checkbox" value='Keto' id="defaultCheck1" />
              <label className={`form-check-label ${editingProduct.checkbox_label}`} for="defaultCheck1">
                Keto
              </label>
            </div>
            <div>
              <input checked={dietsOnFile && dietsOnFile.indexOf('Dairy Free') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${editingProduct.checkbox_input}`} name='diet' type="checkbox" value='Dairy Free' id="defaultCheck1" />
              <label className={`form-check-label ${editingProduct.checkbox_label}`} for="defaultCheck1">
                Dairy Free
              </label>
            </div>

          </div> {/* END Checkboxes */}


        </div>
        <div className={editingProduct.input_wrapper}>
          <label htmlFor="price">Price: </label>
          <input onChange={handleChanges} type="text" name="price" value={product.price} />
        </div>
      </form>
    </div>
  )
}

export default EditProductForm
