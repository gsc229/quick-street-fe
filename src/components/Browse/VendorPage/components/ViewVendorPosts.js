import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../../../../utils/axiosWithAuth';

// styling
import profile from '../../../../styles/scss/profile.module.scss';

const ViewVendorPosts = (props) => {
	const [ vendorPost, setVendorPost ] = useState({
		posts: [],
		count: 0
	});

	const changeDateFormat = (date) => {
		let resultingDate = '';
		const yearMonthArray = date.split('-');
		// console.log(yearMonthArray);
		const dayArray = yearMonthArray[2].split('T');
		// console.log(dayArray);
		resultingDate = yearMonthArray[1] + '/' + dayArray[0];
		// console.log(resultingDate);
		return resultingDate;
	};

	const getVendorPosts = (id) => {
		axiosWithAuth()
			.get(`/vendors/${id}/posts`)
			.then((response) => {
				// console.log(response);
				setVendorPost({
					...vendorPost,
					posts: response.data.data,
					count: response.data.count
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getVendorPosts(props.vendorId);
	}, []);

	return (
		<div className={profile.bulletin_container}>
			<div className={profile.bulletin_header}>
				<h1>Bulletin Board</h1>
			</div>
			<div className={profile.bulletin_wrapper}>
				{vendorPost.posts.map((post) => (
					<div className={profile.bulletin_posts} key={post._id}>
						<div className={profile.line}>
							<p>Date {changeDateFormat(post.createdAt)}</p>
							<hr />
						</div>
						<p>{post.description}</p>
					</div>
				))}
				{vendorPost.count === 0 && <p className="no_post_content">There are no posts to show right now.</p>}
			</div>
		</div>
	);
};

export default ViewVendorPosts;
