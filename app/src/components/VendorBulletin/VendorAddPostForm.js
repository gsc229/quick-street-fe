import React from "react";

const VendorAddPostForm = ({
  post,
  setPost,
  show,
  cancelAddPost,
  postSubmit
}) => {
  let today = new Date();

  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const postChangeHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
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
