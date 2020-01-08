import React, { useState } from "react";
import axios from "axios";

const VendorAddPostForm = ({ show, cancelAddPost }) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const [post, setPost] = useState({
    content: "",
    zipcode: ""
  });

  const postChangeHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };

  const postSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://quickstlabs.herokuapp.com/api/v1.0/vendors/5dfc1ea2396390001715f1e3/posts`,
        { title: "test title", description: post.content }
      )
      .then(res => console.log(res));
  };

  return (
    <form
      className={
        show ? "vendor_add_post_form_show" : "vendor_add_post_form_hide"
      }
      onSubmit={postSubmit}
    >
      <p>{`Date ${today}`}</p>
      <textarea
        value={post.content}
        onChange={postChangeHandler}
        name="content"
      />
      <input
        type="text"
        name="zipcode"
        value={post.zipcode}
        onChange={postChangeHandler}
        placeholder="zipcode"
      />
      <div className="vendor_add_post_btn_group">
        <button>Save</button>
        <button onClick={cancelAddPost}>Cancel</button>
      </div>
    </form>
  );
};

export default VendorAddPostForm;
