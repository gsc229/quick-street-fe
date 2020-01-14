import React from 'react';
import Icon from '../assets/landing/icons/Icon';

//styles
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-container">
			{/* <div className="footer-top-row">
				<div className="footer-top-row-column">
					<p>Company</p>
					<p>About Us</p>
					<p>Careers</p>
					<p>Contact</p>
				</div>
				<div className="footer-top-row-column">
					<p>Community</p>
					<p>Blogs</p>
					<p>Expert Directory</p>
					<p>Events</p>
					<p>Food/Vendor Glossary</p>
				</div>
				<div className="footer-top-row-column">
					<p>Product</p>
					<p>Mobile App</p>
					<p>Help</p>
					<p>Swag</p>
				</div>
			</div> */}
			<div className="footer-bottom-row">
				<div className="footer-bottom-row-blank" />
				<div className="footer-bottom-row-copyright">
					<p>© 2019-2020 Market Avenue, All rights reserved | Terms Of Service | Privacy Policy</p>
				</div>
				{/* <div className="footer-bottom-row-social">
					<Icon name="snapchat" width={24} fill={'#000'} />
					<Icon name="instagram" width={24} fill={'#000'} />
					<Icon name="youtube" width={27} height={20} fill={'#000'} />
					<Icon name="twitter" width={27} height={22} fill={'#000'} />
					<Icon name="facebook" width={27} fill={'#000'} />
					<Icon name="pinterest" width={27} fill={'#000'} />
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
