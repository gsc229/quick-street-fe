import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';

const Posts = (props) => { 

  const [ vendorPost, setVendorPost ] = useState({
    posts: [], 
    count: 0
  })

  const getVendorPosts = (id) => {
    axiosWithAuth()
      .get(`/vendors/${id}/posts`)
      .then(response => {
        // console.log(response);
        setVendorPost({
          ...vendorPost,
          posts: response.data.data, 
          count: response.data.count
        })
      })
      .catch(error => {
        console.log(error); 
      })
  }

  useEffect(() => {
    getVendorPosts(props.vendorId);
  }, [])

  return (
    <div>
      <p>Bulletin Board</p>
      {vendorPost.posts.map(post => (
        <div key={post._id}>
          <p>{post.title}</p>
        </div>
      ))}
      {vendorPost.count === 0 && (
        <p>There are no posts to show right now.</p>
      )}
    </div>
  )

}

export default Posts;