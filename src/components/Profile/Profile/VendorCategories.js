import React, { useState, useEffect } from 'react';

// reusing the checkbox styles from editingProducts
import profile from '../../../styles/scss/vendor/a_vendors_about.module.scss';
import axiosWithAuth from '../../../utils/axiosWithAuth';
const VendorCategories = ({ vendorInfo, setVendorInfo }) => {



  let { vendor_category } = vendorInfo;
  console.log('vendor_category', vendor_category);
  const [categoriesOnFile, setCategoriesOnFile] = useState(vendor_category);

  console.log('categoriesOnFile: ', categoriesOnFile);
  useEffect(() => {
    setCategoriesOnFile(vendor_category)
  }, [vendor_category])

  const updateVendorCategory = (catgories) => {
    const vendorId = localStorage.getItem('user_id');
    console.log('updateVendorCatgories() catgories', catgories)
    axiosWithAuth()
      .put(`/vendors/${vendorId}`, { vendor_category: catgories })
      .then(results => {
        console.log('PUT EditProd.Form updateVendorCatgories()', results)
      })
      .catch(error => console.log(error));
  }

  const handleSelect = (e) => {

    if (e.target.checked) {
      console.log('Checked!', e.target.checked)
      if (vendor_category.indexOf(e.target.value) === -1) {
        console.log('NOTHING HERE WITH VALUE: ', e.target.value);
        console.log('ADDING: ', e.target.value);
        const newCategories = [...categoriesOnFile, e.target.value]
        setCategoriesOnFile(
          [...categoriesOnFile,
          e.target.value]
        );
        updateVendorCategory(newCategories);
        setVendorInfo({
          ...vendorInfo,
          vendor_category: newCategories
        });
      } else {
        console.log('ALREADY GOT THAT!');
      }
    }

    if (!e.target.checked) {
      if (categoriesOnFile.indexOf(e.target.value) !== -1) {
        console.log('REMOVING VALUE: ', e.target.value)
        let newCategories = categoriesOnFile.filter(item => {
          return item !== e.target.value;
        })
        console.log('NEW ARRAY WILL BE: ', newCategories)
        setCategoriesOnFile(newCategories);
        updateVendorCategory(newCategories);
        setVendorInfo({
          ...vendorInfo,
          vendor_category: newCategories
        });

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

      {/* CHECKBOX PROD. CATEGORY */}
      <div className={`${profile.checkbox_wrapper}`}>
        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Baked goods') !== -1 ? true : false} onChange={handleSelect}
            id="Baked Goods" className={`${profile.checkbox_input}`} name='Baked Goods' type="checkbox" value='Baked goods' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Baked Goods">
            Baked goods
            </label>
        </div>

        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Beverages') !== -1 ? true : false} onChange={handleSelect}
            id="Beverages" className={`${profile.checkbox_input}`} name='Beverages' type="checkbox" value='Beverages' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Beverages">
            Beverages
            </label>
        </div>


        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Breads') !== -1 ? true : false} onChange={handleSelect} className={`${profile.checkbox_input}`} name='Breads' type="checkbox" value='Breads' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Breads">
            Breads
            </label>
        </div>


        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Fruits') !== -1 ? true : false} onChange={handleSelect} className={`${profile.checkbox_input}`} name='Fruits' type="checkbox" value='Fruits' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Fruits">
            Fruits
            </label>
        </div>


        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Vegetables') !== -1 ? true : false} onChange={handleSelect} className={`${profile.checkbox_input}`} name='Vegetables' type="checkbox" value='Vegetables' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Vegetables">
            Vegetables
            </label>
        </div>


        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Spreads') !== -1 ? true : false} onChange={handleSelect} className={`${profile.checkbox_input}`} name='Spreads' type="checkbox" value='Spreads' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Spreads">
            Spreads
            </label>
        </div>


        <div className={`${profile.checkbox_inner_wrapper}`}>
          <input checked={categoriesOnFile && categoriesOnFile.indexOf('Other') !== -1 ? true : false} onChange={handleSelect} className={`${profile.checkbox_input}`} name='Other' type="checkbox" value='Other' />
          <label className={`form-check-label ${profile.checkbox_label}`} for="Other">
            Other
            </label>
        </div>

      </div>
    </div>
  )
}

export default VendorCategories