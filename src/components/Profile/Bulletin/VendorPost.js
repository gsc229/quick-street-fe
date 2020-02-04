import React from 'react';
import post from '../../../styles/scss/vendor/a_vendors_post.module.scss';

const VendorPost = ({ content, date }) => {
	return (
		<li className={post.post_container}>
			<div className="post_date_line">
				<p className={post.post_date}>Date {date}</p>
				<hr />
			</div>
			<p className={post.post_content}>{content}</p>
		</li>
	);
};

export default VendorPost;
