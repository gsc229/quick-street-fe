import React from "react";

const VendorPost = ({ content, date, title }) => {
  return (
    <li>
      <p>
        <small>Date:{date}</small>
      </p>
      <p>{title}</p>
      <p>{content}</p>
    </li>
  );
};

export default VendorPost;
