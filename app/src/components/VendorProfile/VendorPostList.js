import React from "react";
import VendorPost from "./VendorPost";

const VendorPostList = ({ posts }) => {
  return (
    <ul>
      {posts
        ? posts.map(p => (
            <VendorPost
              content={p.content}
              date={p.date}
              location={p.location}
            />
          ))
        : null}
    </ul>
  );
};

export default VendorPostList;
