import React, { useState, useEffect } from 'react';
import {
	About,
	VendorProducts,
	AddProductForm,
	Bulletin,
	BannerUploader,
	Nav
} from '../components/index';
import { Placeholder } from '../assets/images/index';
//Styles
import profile from '../styles/scss/profile.module.scss';

//Font awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen } from '@fortawesome/free-solid-svg-icons';

import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Profile = props => {
	const [modal, setModal] = useState(false);
	const [editingName, setEditingName] = useState(false);
	const [vendorInfo, setVendorInfo] = useState({ location: '' });
	const [bannerInfo, setBannerInfo] = useState('no_banner.jpg');
	const [products, setProducts] = useState([]);
	const [productIds, setProductIds] = useState([]);
	const [productImagesIds, setProductImagesIds] = useState([]);
	const [info, setInfo] = useState({
		business_name: '',
		days: '0',
		phone: '',
		about: '',
		hour_from: '',
		hour_to: '',
		location: ''
	});
	const vendorId = props.match.params.id;
	const [editAbout, setEditAbout] = useState(false);
	const [editBusinessName, setEditBusinessName] = useState(false);

	useEffect(() => {
		console.log('USEEFFECT 1 Profile.js')
		async function fetchVendorInfo() {
			try {
				const vendorInfo = await axiosWithAuth().get(
					`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`
				);
				// console.log(`vendorinfo changed`, vendorInfo);
				setVendorInfo(vendorInfo.data.data);
				setBannerInfo(vendorInfo.data.data.vendor_banner);
			} catch (e) {
				// console.log(e);
			}
		}
		fetchVendorInfo();

		async function fetchProducts() {
			try {
				const products = await axiosWithAuth().get(
					`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}/products`
				);

				setProducts(products.data.data);
				setProductIds(products.data.data.map(p => p._id));
			} catch (e) {
				// console.log(e);
			}
		}
		fetchProducts();
	}, []);

	useEffect(() => {
		let temp_ids = [];
		async function fetchImageIds() {
			if (productIds.length !== 0) {
				for (const ids of productIds) {
					try {
						const imageIds = await axiosWithAuth().get(
							`https://quickstlabs.herokuapp.com/api/v1.0/products/${ids}/product-images`
						);

						temp_ids.push(imageIds.data.data[0].public_id);
					} catch (e) {
						// console.log(e);
					}
				}
			}

			setProductImagesIds(temp_ids);
		}
		fetchImageIds();
	}, [productIds]);

	if (products.length !== 0 && productImagesIds.length !== 0) {
		for (let i = 0; i < products.length; i++) {
			products[i].imageId = productImagesIds[i];
		}
	}
	const addProduct = () => {
		setModal(true);
	};

	const addProductformCancelHandler = e => {
		e.preventDefault();
		setModal(false);
	};

	const editName = () => {
		setEditBusinessName(!editBusinessName);
	};

	const saveName = e => {
		e.preventDefault();
		axiosWithAuth()
			.put(
				`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`,
				vendorInfo
			)
			.then(res => {
				// console.log(`update vendor info`, res);
				setVendorInfo(res.data.data);
			})
			.catch(err => {
				console.log('ERROR PUT SAVE NAME', err);
			});
	};

	const editProfile = () => {
		// console.log(`edit profile clicked`);
		setEditAbout(!editAbout);
	};

	const saveProfile = e => {
		e.preventDefault();
		// console.log('PRE PUT vendorInfo', vendorInfo);
		axiosWithAuth()
			.put(
				`https://quickstlabs.herokuapp.com/api/v1.0/vendors/${vendorId}`,
				vendorInfo
			)
			.then(res => {
				// console.log(`update vendor info`, res);
				setVendorInfo(res.data.data);
			})
			.catch(err => {
				console.log('VendorProf. PUT error ', err);
			});
	};

	return (
		<div className={profile.banner_container}>
			<Nav {...vendorInfo} />
			<div className={profile.banner_wrapper}>
				<div className={profile.banner_text_btns}>
					<div className={profile.vendor_header_name}>
						<input
							onChange={e => {
								if (editBusinessName) {
									setVendorInfo({
										...vendorInfo,
										business_name: e.target.value
									});
								}
							}}
							value={vendorInfo.business_name}
							className={editingName ? profile.glowing_border : 'none'}
						/>
					</div>

					<div className={profile.vendor_profile_btn_group}>
						<FontAwesomeIcon
							id={profile.pen}
							className={`${profile.icon} " " ${
								editingName ? profile.red_edit : profile.normal_pen
								}`}
							icon={faPen}
							onClick={() => {
								editName();
								setEditingName(!editingName);
							}}
						/>
						<FontAwesomeIcon
							id={profile.save}
							className={profile.icon}
							icon={faSave}
							onClick={e => {
								saveName(e);
								setEditingName(false);
							}}
						/>

						{/* <img src={create} alt='create' onClick={editProfile} />
            <img src={save} alt='save' onClick={saveProfile} /> */}
					</div>
				</div>

				<div className={profile.vendor_banner_image_container}>
					{bannerInfo !== `no-photo.jpg` ? (
						<CloudinaryContext cloudName='quickstlabs'>
							<Image
								className={profile.vendor_banner_image}
								publicId={bannerInfo}
							>
								<Transformation
									gravity='center'
									height='355'
									width='1062'
									crop='fill'
								/>
							</Image>
						</CloudinaryContext>
					) : (
							<img
								className='vendor_banner_image'
								src={Placeholder}
								alt='vendor header'
							/>
						)}
					<div className={profile.vendor_banner_upload}>
						<BannerUploader
							vendorId={vendorId}
							vendorInfo={vendorInfo}
							setBannerInfo={setBannerInfo}
							bannerInfo={bannerInfo}
						/>
					</div>
				</div>
			</div>

			<div>
				<About
					vendorInfo={vendorInfo}
					info={info}
					setInfo={setInfo}
					editAbout={editAbout}
					editProfile={editProfile}
					saveProfile={saveProfile}
					setVendorInfo={setVendorInfo}
				/>
				<VendorProducts
					productIds={productIds}
					products={products}
					addProduct={addProduct}
				/>
				<AddProductForm
					productIds={productIds}
					modal={modal}
					products={products}
					addProduct={addProduct}
					setProducts={setProducts}
					setModal={setModal}
					addProductformCancelHandler={addProductformCancelHandler}
					vendorId={vendorId}
				/>
				<Bulletin vendorId={vendorId} />
			</div>
		</div>
	);
};

export default Profile;
