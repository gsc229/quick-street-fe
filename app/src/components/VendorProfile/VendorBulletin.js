import React, { useState } from "react";
import VendorAddPostForm from "./VendorAddPostForm";
import VendorPostList from "./VendorPostList";

const p = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12/05/2016",
    location: "New York"
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "11/12/2019",
    location: "New York"
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "11/12/2019",
    location: "New York"
  }
];

const VendorBulletin = props => {
  const [showAddPostForm, setShowAddPostForm] = useState(false);

  const addPost = e => {
    e.preventDefault();
    setShowAddPostForm(true);
  };

  const cancelAddPost = e => {
    e.preventDefault();
    setShowAddPostForm(false);
  };

  return (
    <div className="vendor_bulletin_container">
      <div className="vendor_bulletin_title">
        <p>Bulletin Board</p>
        <hr />
      </div>

      <div className="vendor_add_post_btn_wrapper">
        <button onClick={addPost}>Add Post</button>
      </div>

      <VendorAddPostForm show={showAddPostForm} cancelAddPost={cancelAddPost} />

      <VendorPostList posts={p} />
    </div>
  );
};

export default VendorBulletin;
