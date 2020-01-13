import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../utils/axiosWithAuth';

const Posts = (props) => { 

  const [ vendorPost, setVendorPost ] = useState({
    posts: [], 
    count: 0
  })

  const changeDateFormat = (date) => {
    let resultingDate = ''
    const yearMonthArray = date.split('-');
    // console.log(yearMonthArray);
    const dayArray = yearMonthArray[2].split('T22');
    // console.log(dayArray);
    resultingDate = yearMonthArray[1] + '/' + dayArray[0];
    // console.log(resultingDate);
    return resultingDate;
    
  }

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
    <div className='bulletin_board_section'>
      <header className='section_title'>Bulletin Board</header>
      {vendorPost.posts.map(post => (
        <div className='posts_div' key={post._id}>
          <div className='post_date_line'>
          <p className='post_date'>Date {changeDateFormat(post.createdAt)}</p>      
          <hr></hr>
          </div>
          <p className='post_content'>{post.title}</p>
        </div>
      ))}
      {vendorPost.count === 0 && (
        <p>There are no posts to show right now.</p>
      )}
    </div>
  )

}

export default Posts;