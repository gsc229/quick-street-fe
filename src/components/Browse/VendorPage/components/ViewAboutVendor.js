import React, { useState, useEffect } from 'react';
import Map from '../../../shared/Map';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
// styling 
import profile from '../../../../styles/scss/profile.module.scss';
import banner from '../../../../styles/scss/vendor_banner.module.scss';
// import { image } from '../../assets/rectangle.png';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
const ViewAboutVendor = (props) => {

	const [vendor, setVendor] = useState({
		location: {},

	});

	const getVendor = (id) => {
		axiosWithAuth()
			.get(`/vendors/${id}`)
			.then((response) => {
				// console.log(response);
				setVendor(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getVendor(props.vendorId);
	}, []);

	return (
		<>
			<div className={profile.banner_container}>
				<div className={banner.banner_wrapper}>
					<div className={banner.vendor_banner_image_container}>
						<h1 className={banner.business_name_cust} >{vendor.business_name}</h1>
						<CloudinaryContext cloudName="quickstlabs">
							<Image
								className={banner.vendor_banner_image}
								publicId={vendor.vendor_banner}>
								<Transformation gravity="center" height="318" width="1062" crop="fill" />
							</Image>
						</CloudinaryContext>
					</div>
				</div>
			</div>
			<div className={profile.about_container}>
				<div className={profile.about_wrapper}>
					<div className={profile.column_left}>
						<h1>About Us</h1>
						<p>{vendor.description}</p>
						{/* <p className='title'>Hours of Operation</p>
          <p className='title_content'>{vendor.days_of_week} - {vendor.hours}</p> */}
						<h1>Contact</h1>
						<p>{vendor.phone}</p>
						<p>{vendor.email}</p>
					</div>
					<div className={profile.column_right}>
						<h1>Location</h1>
						<p>The vendor can be found at {vendor.location.zipcode} area</p>
						<Map zipcode={vendor.location.zipcode} width={403} height={280} radius={3000} />
					</div>

				</div>
			</div>

		</>
	);
};

export default ViewAboutVendor;
