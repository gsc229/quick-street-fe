import React, { useState } from "react";
import VendorPost from "./VendorPost";

const VendorBulletin = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts ? (
          posts.map(p => <VendorPost post={p} />)
        ) : (
          <p>you don't have any post yet</p>
        )}
      </ul>
    </div>
  );
};

export default VendorBulletin;
