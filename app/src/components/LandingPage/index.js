import React from 'react';

// styling
import '../LandingPage/landing.css';
//Icons

import Icon from "../../assets/landing/icons/Icon";
class LandingPage extends React.Component {
	render() {
		return (
			<div className="landingContainer">
				<div className="heroContainer">
					<div className="landingMenu">
						<p>Quick Street</p>
						<p>Food</p>
						<p>Services</p>
						<p>About</p>
						<p>Log In</p>
						<p>Join Us</p>
					</div>
					<div className="landingInfo">
						<p>Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony </p>
					</div>
					<div className="vendorButton">
						<p>I'm a Vendor!</p>
					</div>
					<div className="customerButton">
						<p>I'm a Customer!</p>
					</div>
				</div>
				<div className="marketing-Container">
					<div className="marketing-Header"> See What We Offer!</div>
					<div className="marketing-Box">
						<div className="marketing-featured-Container">
							<div className="marketing-featured-Image">
								<image src="../../assets/landing/cookies.jpeg" />
								<p>Cookie Bites - Dietary friendly cookies with all locally sourced ingredients.</p>
							</div>
						</div>
						<div className="marketing-right-Box">
							<div className="marketing-right-Box-Toprow">
								<div className="marketing-right-Box-Toprow-left">
									<p>Browse, buy, share, your find on local food vendors.</p>
								</div>
								<div className="marketing-right-Box-Toprow-right">
									<p>
										Not sure yet? That's ok, start by browsing our vendors that are already making
										moves.
									</p>
									<div className="marketing-right-Box-Toprow-right-btn">
										<p>Start Browsing</p>
									</div>
								</div>
							</div>
							<div className="marketing-right-Box-BottomRow">
								<div className="marketing-right-Box-BottomRow-features">
									<div className="marketing-right-Box-BottomRow-featured-image" />
									<div className="marketing-right-Box-BottomRow-feature-image-text">
										<p>Brad’s Bread - Seasonal breads from the region. </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-container">
					<div className="footer-top-row">
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
					</div>
					<div className="footer-bottom-row">
						<div className="footer-bottom-row-blank"></div>
						<div className="footer-bottom-row-copyright">
						<p>© 2019 Quick Street, All rights reserved | Terms Of Service | Privacy Policy</p>
						</div>
						<div className="footer-bottom-row-social">
						<Icon name="snapchat" width={24} fill={'#000'} />
						<Icon name="instagram" width={24} fill={'#000'} />
						<Icon name="youtube" width={27} height={20} fill={'#000'} />
						<Icon name="twitter" width={27} height={22} fill={'#000'} />
						<Icon name="facebook" width={27} fill={'#000'} />
						<Icon name="pinterest" width={27} fill={'#000'} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;
