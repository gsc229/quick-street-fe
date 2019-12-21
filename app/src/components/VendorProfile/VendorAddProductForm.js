import React, { useState } from "react";

const VendorAddProductForm = ({ modal, addProductformClickHandler }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });

  const changePicture = e => {
    console.log(e);
    // setFile(e.target.file[0]);
    // setFilename(e.target.file[0].name);
  };

  const changeHandler = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(`upload a product`);
  };

  return (
    <div
      className={
        modal
          ? "vendor_add_product_form_container_show"
          : "vendor_add_product_form_container"
      }
    >
      <form className="vendor_add_product_form" onSubmit={onSubmit}>
        <div className="input_wrapper">
          <label>Picture of item</label>
          <input type="file" onChange={changePicture} />
        </div>

        <div className="input_wrapper">
          <label>Name of item</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeHandler}
          />
        </div>
        <div className="input_wrapper">
          <label>Price Point</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={changeHandler}
          />
        </div>
        <button onClick={addProductformClickHandler}>Cancel</button>
        <input type="submit" />
      </form>
    </div>
  );
};

export default VendorAddProductForm;
