import React, { useState } from 'react';
import { AboutForm } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen } from '@fortawesome/free-solid-svg-icons';

// styling
import profile from '../../../styles/scss/profile.module.scss';

const About = ({ editAbout, vendorInfo, info, setInfo, editProfile, saveProfile, setVendorInfo }) => {
	const [ editingDetails, setEditingDetails ] = useState(false);
	// console.log(info);
	return (
		<div className={profile.about_container}>
			<div className={profile.about_wrapper}>
				<div className={profile.about_top}>
					<h3>About Us</h3>
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

						{/* <img src={create} alt='create' onClick={editProfile} />
                <img src={save} alt='save' onClick={saveProfile} /> */}
					</div>
				</div>

				<div className={profile.about_bottom}>
					<AboutForm
						editAbout={editAbout}
						vendorInfo={vendorInfo}
						info={info}
						setInfo={setInfo}
						setVendorInfo={setVendorInfo}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
