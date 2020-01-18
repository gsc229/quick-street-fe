import React, { useState } from 'react';
import profile from '../../styles/scss/vendor_profile.module.scss';
const NavBar = ({ business_name }) => {
	const [ show, setShow ] = useState(false);

	return (
		<div className={profile.vendor_header_container}>
			<h1>Market Avenue</h1>

			<div id={profile.hamburger_dropdown}>
				<span id={profile.closebtn} onClick={() => setShow(!show)}>
					<span class={profile.line1} />
					<span class={profile.line2} />
					<span class={profile.line3} />
				</span>

				<div className={show ? profile.hamburger_dropdown_links : profile.no_drop}>
					<p className={profile.header_about}>About</p>
					<p className={profile.header_food}>Food</p>
					<p className={profile.header_business_name}> {business_name} </p>
				</div>
			</div>

			<div className={profile.header_links}>
				<p className={profile.header_about}>About</p>
				<p className={profile.header_food}>Food</p>
				<p className={profile.header_business_name}> {business_name} </p>
			</div>
		</div>
	);
};

export default NavBar;
