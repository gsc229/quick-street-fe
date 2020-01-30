import React from 'react';
import { Link } from 'react-router-dom';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import browse from '../../../styles/scss/browse.module.scss';
import rectangle from '../../../assets/images/Profile/rectangle.png';
import placeholder from '../../../assets/images/Profile/placeholder.png';

const Browse = (props) => {
	// console.log('props from the search page is', props);
	const noZipcodeArray = [1, 2, 3, 4, 5, 6];

	return (
		<div className={browse.browse_wrapper}>
			{props.zipcode === '' ? (
				<div>
					<p className={browse.results_para}>Your results will display here once you have set a location</p>
					<div className={browse.vendor_div_empty}>
						{noZipcodeArray.map((value, index) => (
							<div className={browse.vendor_details_empty} key={index}>
								<img className={browse.placeholder_image} src={rectangle} alt="img" />
								<img className={browse.placeholder_text} src={placeholder} alt="img" />
								<img className={browse.placeholder_text} src={placeholder} alt="img" />
							</div>
						))}
					</div>
				</div>
			) : (
					<p className={browse.vendor_count}>Showing all ({props.vendors.count})</p>
				)}
			<div className={browse.vendors_div}>
				{props.vendors.vendorDetails.map((vendor) => (
					<div className={browse.vendor_details_div} key={vendor._id}>
						<div className={browse.vendor_banner_image}>
							<CloudinaryContext cloudName="quickstlabs">
								<Image publicId={vendor.vendor_banner}>
									<Transformation height="160" width="150" crop="fill" />
								</Image>
							</CloudinaryContext>
						</div>
						{/* <img className='vendor_banner_image' src={vendor.vendor_banner} alt='Banner Image'></img> */}
						<div className={browse.vendor_name}>{vendor.business_name}</div>
						<div className={browse.category}>
							<p>{vendor.vendor_category}</p>
						</div>
						<Link
							className={browse.view_vendor}
							to={{ 
								pathname: `/browse/${vendor._id}`, 
								cart: props.cart }}
						>
							View
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Browse;
