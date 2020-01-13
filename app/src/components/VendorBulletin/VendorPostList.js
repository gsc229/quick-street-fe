import React from "react";
import VendorPost from "./VendorPost";

const VendorPostList = ({ posts }) => {
  console.log('VendorPostList posts', posts)
  return (
    <div className="vendor_post_list_container">
      <ul>
        {posts.length !== 0
          ? posts
            .reverse()
            .map((p, idx) => (
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
