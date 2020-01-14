import React from "react";
import post from '../../styles/scss/vendor_post.module.scss';


const VendorPost = ({ content, date }) => {
  return (
    <li>
      <p className={post.post_date}>
        Date {date}
      </p>

      <p className={post.post_content}>{content}</p>
    </li>
  );
};

export default VendorPost;
