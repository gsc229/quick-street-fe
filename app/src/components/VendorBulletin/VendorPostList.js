import React from "react";
import VendorPost from "./VendorPost";

const VendorPostList = ({ posts }) => {
  return (
    <div className="vendor_post_list_container">
      <ul>
        {posts
          ? posts.map((p, idx) => (
              <VendorPost
                key={idx}
                content={p.description}
                title={p.title}
                date={p.createdAt.split("T")[0]}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default VendorPostList;
