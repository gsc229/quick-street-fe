import React, { useState } from "react";
import VendorPost from "./VendorPost";
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
  return (
    <div className="vendor_bulletin_container">
      <p>Bulletin Board</p>
      <button>Add Post</button>

      <VendorAddPostForm />

      <VendorPostList posts={p} />
    </div>
  );
};

export default VendorBulletin;
