import React, { useState, useEffect } from 'react';
// reusing the checkbox styles from editingProducts
import profile from '../../../styles/scss/profile.module.scss';
const VendorCategories = ({ vendorInfo }) => {
  const { vendor_category } = vendorInfo;

  const [categoriesOnFile, setCategoriesOnFile] = useState(vendor_category);
  const [unitOnFile, setUnitOnFile] = useState([]);
  console.log('categoriesOnFile: ', categoriesOnFile);
  const handleSelect = (e) => {

    if (e.target.checked) {
      console.log('Checked!', e.target.checked)
      if (vendor_category.indexOf(e.target.value) === -1) {
        console.log('NOTHING HERE WITH VALUE: ', e.target.value);
        console.log('ADDING: ', e.target.value);

        setCategoriesOnFile({
          ...categoriesOnFile,
          [e.target.name]: [...categoriesOnFile[e.target.name], e.target.value]
        })

      } else {
        console.log('ALREADY GOT THAT!');
      }
    }

    if (!e.target.checked) {
      if (categoriesOnFile.indexOf(e.target.value) !== -1) {
        console.log('REMOVING VALUE: ', e.target.value)
        let newArray = categoriesOnFile.filter(item => {
          return item !== e.target.value;
        })
        console.log('NEW ARRAY WILL BE: ', newArray)
        setCategoriesOnFile({
          ...categoriesOnFile,
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
    <div className={profile.input_wrapper} >
      <h1>HI CATEGORIES!</h1>
      {/* CHECKBOX PROD. CATEGORY */}
      <div className={`form-check ${profile.checkbox_wrapper}`}>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Baked goods') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Baked goods' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Baked goods
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Beverages') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Beverages' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Beverages
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Breads') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Breads' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Breads
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Fruits') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Fruits' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Fruits
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Vegetables') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Vegetables' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Vegetables
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Spreads') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Spreads' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Spreads
          </label>
        </div>
        <div>
          <input checked={vendor_category && vendor_category.indexOf('Other') !== -1 ? true : false} onChange={handleSelect} className={`form-check-input ${profile.checkbox_input}`} name='vendor_category' type="checkbox" value='Other' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="defaultCheck1">
            Other
          </label>
        </div>
      </div>
    </div>
  )
}

export default VendorCategories
