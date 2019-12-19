import React, { useState } from "react";

const VendorAddProductForm = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });

  const changePicture = e => {
    setFile(e.target.file[0]);
    setFilename(e.target.file[0].name);
  };

  const changeHandler = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(`upload a product`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Picture of item</label>
          <input type="file" onChange={changePicture} />
        </div>

        <div>
          <label>Name of item</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Price Point</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={changeHandler}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default VendorAddProductForm;
