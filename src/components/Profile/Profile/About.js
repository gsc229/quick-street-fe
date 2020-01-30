import React, { useState, useEffect } from 'react';
import { AboutForm } from '../../index';
import Map from '../../shared/Map';
//SVG Icons
import { pencil_light, pencil_regular, phone_alt_light, envelope_light, map_pin_place, map_marker_alt_light } from '../../../assets/svgs'

// styling
import profile from '../../../styles/scss/profile.module.scss';

const About = ({ editAbout, vendorInfo, info, setInfo, editProfile, saveProfile, setVendorInfo }) => {
	const [editingNow, setEditingNow] = useState("none");
	const [hoveringClass, setHoveringClass] = useState('not_hovering');


	const handleChanges = (e) => {
		setVendorInfo({
			...vendorInfo,
			[e.target.name]: e.target.value
		})
	}

	const handleZip = (e) => {
		setVendorInfo({
			...vendorInfo,
			location: {
				...vendorInfo.location,
				zipcode: e.target.value
			}
		})
	}


	// console.log(info);
	return (
		<div className={profile.about_container}>
			<div className={profile.about_wrapper}>
				<div className={profile.column_left}>

					{/* ABOUT US  */}
					<div className={profile.about_info}>
						<div className={profile.info_top}>
							<h2>About Us</h2>

						</div>{/* ==== TOP/BOTTOM divide ====== */}
						<div className={profile.info_bottom}>
							<div className={profile.info_content}>
								{editingNow === 'about' ? // TURNARY ? show form...
									<div>
										<form action="">
											<textarea onChange={handleChanges} name="description" value={vendorInfo.description} cols="30" rows="10"></textarea>
										</form>
										<p
											className={profile.save_changes}
											onClick={(e) => {
												setEditingNow('none')
												saveProfile(e)
												console.log("saveProfile() Profile.js info_content p ")
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...show text

									<div className={profile.saved_text_container} >
										{hoveringClass === 'about_pen' && <img className={`${profile.edit_icon}`} src={pencil_light} alt="" />}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('about_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => {
												setEditingNow('about')
												setHoveringClass('not_hovering')
												saveProfile();
											}}
										>
											{vendorInfo.description}
										</p>
									</div>
								} {/* END OF TURNARY - ABOUT US */}
							</div>
							<div className={profile.edit_guides}>
								{editAbout && <p><i className="fa fa-save"></i>&nbsp; click to save</p>}
							</div>
						</div>
					</div>{/* END ABOUT US */}
					{/* HOURS OF OPERATION  */}
					<div className={profile.about_info}>
						<div className={profile.info_top}>
							<h2>Hours of Operation</h2>
						</div>{/* ==== TOP/BOTTOM divide ====== */}
						<div className={profile.info_bottom}>
							<div className={profile.info_content}>
								{editingNow === 'hours' ? // TURNARY ? show form...
									<div>
										<form action="">
											<textarea onChange={handleChanges} name="hours" value={vendorInfo.hours} cols="30" rows="10"></textarea>
										</form>
										<p
											className={profile.save_changes}
											onClick={(e) => {
												setEditingNow('none')
												saveProfile(e)
												console.log("saveProfile() Profile.js info_content p ")
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'hours_pen' && <img className={`${profile.edit_icon}`} src={pencil_light} alt="" />}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('hours_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => {
												setEditingNow('hours');
												setHoveringClass('not_hovering');
												saveProfile();
											}}
										>
											{vendorInfo.hours}
										</p>
									</div>
								} {/* END OF TURNARY - HOURS OF OPERATION */}
							</div>
							<div className={profile.edit_guides}>
								{editAbout && <p><i className="fa fa-save"></i>&nbsp; click to save</p>}
							</div>
						</div>
					</div>{/* END HOURS OF OPERATION */}
					{/* CONTACT */}
					<div className={profile.about_info}>
						<div className={profile.info_top}>
							<h2>Contact</h2>
						</div>{/* ==== TOP/BOTTOM divide ====== */}
						<div className={profile.info_bottom}>
							<div className={profile.info_content}>
								{editingNow === 'phone' ? // TURNARY ? show form...
									<div>
										<form action="">
											<input onChange={handleChanges} name="phone" value={vendorInfo.phone} cols="30" rows="10"></input>
										</form>
										<p
											className={profile.save_changes}
											onClick={(e) => {
												setEditingNow('none')
												saveProfile(e)
												console.log("saveProfile() Profile.js info_content p ")
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'phone_pen' && <img className={`${profile.edit_icon}`} src={pencil_light} alt="" />}
										<div className={profile.contact_svg_p_container}>
											<img className={`${profile.contact_icon}`} src={phone_alt_light} alt="" />
											<p
												className={profile.saved_text_content}
												onMouseOver={() => setHoveringClass('phone_pen')}
												onMouseLeave={() => setHoveringClass('not_hovering')}
												onClick={() => {
													setEditingNow('phone');
													setHoveringClass('not_hovering');
													saveProfile();
												}}
											>
												{vendorInfo.phone}
											</p>
										</div>
									</div>
								} {/* END OF TURNARY - PHONE*/}
								{editingNow === 'email' ? // TURNARY ? show form...
									<div>
										<form action="">
											<input onChange={handleChanges} name="email" value={vendorInfo.email} cols="30" rows="10"></input>

										</form>
										<p
											className={profile.save_changes}
											onClick={(e) => {
												setEditingNow('none');
												saveProfile(e);
												console.log("saveProfile() Profile.js info_content p ")
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'email_pen' && <img className={`${profile.edit_icon}`} src={pencil_light} alt="" />}
										<div className={profile.contact_svg_p_container}>
											<img className={`${profile.contact_icon}`} src={envelope_light} alt="" />
											<p
												className={profile.saved_text_content}
												onMouseOver={() => setHoveringClass('email_pen')}
												onMouseLeave={() => setHoveringClass('not_hovering')}
												onClick={() => {
													setEditingNow('email');
													setHoveringClass('not_hovering');
													saveProfile();
												}}
											>
												{vendorInfo.email}
											</p>
										</div>
									</div>
								} {/* END OF TURNARY - EMAIL*/}
							</div>
							<div className={profile.edit_guides}>
								{editAbout && <p><i className="fa fa-save"></i>&nbsp; click to save</p>}
							</div>
						</div>
					</div>{/* END CONTACT*/}
				</div>
				{/* ========   COLUMN LEFT/RIGHT DIVIDE ========= */}
				{/* ========   COLUMN LEFT/RIGHT DIVIDE ========= */}
				{/* ========   COLUMN LEFT/RIGHT DIVIDE ========= */}
				<div className={profile.column_right}>

					{/* ABOUT US  */}
					<div className={profile.about_info}>
						<div className={profile.info_top}>
							<h2>Location</h2>
							<img className={`${profile.map_pin_icon}`} src={map_marker_alt_light} alt="" />
						</div>{/* ==== TOP/BOTTOM divide ====== */}
						<div className={profile.info_bottom}>
							<div className={profile.info_content}>
								{editingNow === 'zipcode' ? // TURNARY ? show form...
									<div>
										<form action="">
											<input onChange={handleZip} name="phone" value={vendorInfo.location.zipcode} cols="30" rows="10"></input>
										</form>
										<p
											className={profile.save_changes}
											onClick={(e) => {
												setEditingNow('none')
												saveProfile(e)
												console.log("saveProfile() Profile.js info_content p ")
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...show text

									<div className={profile.saved_text_container} >
										{hoveringClass === 'zipcode_pen' && <img className={`${profile.edit_icon}`} src={pencil_light} alt="" />}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('zipcode_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => {
												setEditingNow('zipcode');
												setHoveringClass('not_hovering');
												saveProfile();
											}}
										>
											This vendor can be found in the{vendorInfo.location.zipcode} area.
										</p>
									</div>
								} {/* END OF TURNARY - LOCATION */}
							</div>
							<div className={profile.edit_guides}>
								{editAbout && <p><i className="fa fa-save"></i>&nbsp; click to save</p>}
							</div>
						</div>
						<Map zipcode={vendorInfo.location.zipcode} width={403} height={280} radius={3000} />
					</div>{/* END LOCATION */}

				</div>{/* END COLUMN RIGHT */}
			</div>
		</div>
	);
};

export default About;


/*



					<div className={profile.hours_info}>

					</div>
					<div className={profile.contact_info}>

					</div>

				<div className={profile.vendor_about_btn_group}>
						<FontAwesomeIcon
							id={profile.pen}
							className={`${profile.icon} " " ${editingDetails ? profile.red_edit : profile.normal_pen}`}
							icon={faPen}
							onClick={() => {
								editProfile();
								setEditingDetails(!editingDetails);
							}}
						/>
						<FontAwesomeIcon
							id={profile.save}
							className={profile.icon}
							icon={faSave}
							onClick={(e) => {
								saveProfile(e);
								setEditingDetails(false);
							}}
						/>

						{<img src={create} alt='create' onClick={editProfile} />
                <img src={save} alt='save' onClick={saveProfile} />
					</div >


					<AboutForm
						editAbout={editAbout}
						vendorInfo={vendorInfo}
						info={info}
						setInfo={setInfo}
						setVendorInfo={setVendorInfo}
					/>


					*/