import React, { useState } from 'react';
import { AboutForm } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen } from '@fortawesome/free-solid-svg-icons';

// styling
import profile from '../../../styles/scss/profile.module.scss';

const About = ({ editAbout, vendorInfo, info, setInfo, editProfile, saveProfile, setVendorInfo }) => {
	const [editingDetails, setEditingDetails] = useState(false);

	const [editingNow, setEditingNow] = useState("none");
	const [hoveringClass, setHoveringClass] = useState('not_hovering');

	const handleChanges = (e) => {
		setVendorInfo({
			...vendorInfo,
			[e.target.name]: e.target.value
		})
	}



	console.log('editingNow: ', editingNow);
	// console.log(info);
	return (
		<div className={profile.about_container}>
			<div className={profile.about_wrapper}>
				<div className={profile.column_left}>
					<h1>COLUMN LEFT</h1>
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
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...show text

									<div className={profile.saved_text_container} >
										{hoveringClass === 'about_pen' && <p className={`${profile.edit_icon}`} ><i className="fa fa-edit"></i></p>}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('about_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => (setEditingNow('about'),
												setHoveringClass('not_hovering'))}
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
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'hours_pen' && <p className={`${profile.edit_icon} ${profile[hoveringClass]}`} ><i className="fa fa-edit"></i></p>}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('hours_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => (setEditingNow('hours'),
												setHoveringClass('not_hovering'))}
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
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'phone_pen' && <p className={`${profile.edit_icon} ${profile[hoveringClass]}`} ><i className="fa fa-edit"></i></p>}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('phone_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => (setEditingNow('phone'),
												setHoveringClass('not_hovering'))}
										>
											{vendorInfo.phone}
										</p>
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
												setEditingNow('none')
												saveProfile(e)
											}}
										><i className="fa fa-save"></i>&nbsp;save</p>
									</div> : //<<<<<<< TURNARY : else...
									<div className={profile.saved_text_container} >
										{hoveringClass === 'email_pen' && <p className={`${profile.edit_icon} ${profile[hoveringClass]}`} ><i className="fa fa-edit"></i></p>}
										<p
											className={profile.saved_text_content}
											onMouseOver={() => setHoveringClass('email_pen')}
											onMouseLeave={() => setHoveringClass('not_hovering')}
											onClick={() => (setEditingNow('email'),
												setHoveringClass('not_hovering'))}
										>
											{vendorInfo.email}
										</p>
									</div>
								} {/* END OF TURNARY - EMAIL*/}
							</div>
							<div className={profile.edit_guides}>
								{editAbout && <p><i className="fa fa-save"></i>&nbsp; click to save</p>}
							</div>
						</div>
					</div>{/* END CONTACT*/}




				</div>{/* ======== LEFT/RIGHT DIVIDE ========= */}

				<div className={profile.column_right}>
					<h1>COLUMN RIGHT</h1>
				</div>
			</div>
		</div >
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