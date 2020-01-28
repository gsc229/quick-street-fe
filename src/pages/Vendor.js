// ** Vendor customer facing page ** //

import React, { useState } from 'react';
import { ViewAboutVendor, ViewVendorProducts, ViewVendorPosts, Menu, Footer, Nav } from '../components/index';

// stlyes
import profile from '../styles/scss/profile.module.scss';

const Vendor = (props) => {
	const [ cart, setCart ] = useState([ { item: {} } ]);
	const vendorId = props.match.params.id;
	console.log('props in vendor view page', props);

	return (
		<div>
			<div className={profile.container}>
				<Nav />
				<ViewAboutVendor vendorId={vendorId} />
				<ViewVendorProducts setCart={setCart} vendorId={vendorId} />
				<ViewVendorPosts vendorId={vendorId} />
				{/* <button onClick={() => props.history.goBack()}>Back</button> */}
			</div>
			<Footer />
		</div>
	);
};

export default Vendor;
