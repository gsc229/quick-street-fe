import React, { useState, useEffect } from 'react';
import { AddPostForm, VendorPostList } from '../../index';
import axios from 'axios';
import axiosWithAuth from '../../../utils/axiosWithAuth';

import profile from '../../../styles/scss/profile.module.scss';

const Bulletin = (props) => {
	const [ showAddPostForm, setShowAddPostForm ] = useState(false);
	const [ posts, setPosts ] = useState([]);
	const [ post, setPost ] = useState({
		content: '',
		zipcode: ''
	});

	const addPost = (e) => {
		e.preventDefault();
		setShowAddPostForm(true);
	};

	const cancelAddPost = (e) => {
		e.preventDefault();
		setShowAddPostForm(false);
	};

	const postSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${props.vendorId}/posts`, {
				title: 'test title',
				description: post.content
			})
			.then((res) => setPosts([ ...posts, res.data.data ]));

		setPost({ post: '', content: '' });
		setShowAddPostForm(false);
	};

	useEffect(() => {
		axios.get(`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${props.vendorId}/posts`).then((res) => {
			// console.log(res.data.data);
			setPosts(res.data.data);
		});
	}, []);

	return (
		<div className={profile.vendor_bulletin_container}>
			<div className={profile.vendor_bulletin_header}>
				<div className={profile.vendor_bulletin_title}>
					<p>Bulletin Board</p>
					{/* <hr /> */}
				</div>

				<div className={profile.vendor_add_post_btn_wrapper}>
					<button className={profile.vendor_bulletin_button} onClick={addPost}>
						Add Post
					</button>
				</div>
			</div>

			<AddPostForm
				show={showAddPostForm}
				cancelAddPost={cancelAddPost}
				post={post}
				setPost={setPost}
				postSubmit={postSubmit}
			/>

			<VendorPostList posts={posts} />
		</div>
	);
};

export default Bulletin;
