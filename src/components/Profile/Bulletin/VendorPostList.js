import React from 'react';
import VendorPost from './VendorPost';
import post from '../../../styles/scss/vendor/a_vendors_post.module.scss';

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

const VendorPostList = ({ posts }) => {
	return (
		<div className={post.vendor_post_list_container}>
			<ul>
				{posts.length !== 0 ? (
					posts
						.reverse()
						.map((p, idx) => (
							<VendorPost
								key={idx}
								content={p.description}
								date={changeDateFormat(p.createdAt.split('T')[0])}
							/>
						))
				) : null}
			</ul>
		</div>
	);
};

export default VendorPostList;
