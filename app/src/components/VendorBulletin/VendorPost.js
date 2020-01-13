import React from "react";

const VendorPost = ({ content, date }) => {
  return (
    <li>
      <p>
        <small>Date:{date}</small>
      </p>

      <p>{content}</p>
    </li>
  );
};

export default VendorPost;
