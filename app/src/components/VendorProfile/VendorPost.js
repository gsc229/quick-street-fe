import React from "react";

const VendorPost = ({ content, date, location }) => {
  return (
    <li>
      <p>
        <small>{date}</small>
      </p>
      <p>{content}</p>
      <p>
        <small>{location}</small>
      </p>
    </li>
  );
};

export default VendorPost;
