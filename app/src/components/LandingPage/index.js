import React from 'react';

// styling
import '../LandingPage/landing.css';
//Icons

import Icon from '../../assets/landing/icons/Icon';
import Works1 from '../../assets/landing/images/works-1.png';
import Works2 from '../../assets/landing/images/works-2.png';
import Works3 from '../../assets/landing/images/works-3.png';

import Cookies from '../../assets/landing/images/cookies.png';

import Carousel from '../../assets/landing/images/carousel.png';

import Testimonials1 from '../../assets/landing/images/testimonial-1.png';
class LandingPage extends React.Component {
	render() {
		return (
			<div className="landingContainer">
				<div className="heroContainer">
					<div className="menu-container">
						<nav class="navbar">
							Quick Street
							<ul class="nav-links">
								<li class="nav-item">
									<a href="#">Food</a>
								</li>
								<li class="nav-item">
									<a href="#">Services</a>
								</li>
								<li class="nav-item">
									<a href="#">About</a>
								</li>
								<li class="nav-item">
									<a href="#">Login</a>
								</li>
								<li class="nav-item">
									<a href="#">Join Us</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="landingInfo">
						<p>Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony </p>
						<div className="button-container">
							<div className="vendorButton">I'm a Vendor!</div>
							<div className="customerButton">I'm a Customer!</div>
						</div>
					</div>
				</div>
				<div className="marketing-Header"> See What We Offer!</div>
				<div className="marketing-Container">
					<div className="marketing-Box">
						<div className="marketing-featured-Container">
							<div className="marketing-featured-Image">
								<img src={Cookies} alt="cookies" />
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
				<div className="marketing-Header"> How it Works</div>
				<div className="works-container">
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Works1} alt="works1" />
						</div>
						<div className="works-content">
							We help vendors gain visibility more consistently to their customer base
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Works2} alt="works2" />
						</div>
						<div className="works-content">
							As the customer, we can seamlessly support your local food vendor through a one stop shop
							search platform.
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Works3} alt="works3" />
						</div>
						<div className="works-content">
							See what you like? We have a seamless order request process for both sides. Win-win.{' '}
						</div>
					</div>
				</div>
				<div className="marketing-Header"> Our Spotlight Vendors For This Month</div>
				<div className="carousel-container">
					<img src={Carousel} alt="Carousel" />
				</div>
				<div className="marketing-Header"> Testimonials</div>
				<div className="works-container">
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Testimonials1} alt="works1" />
						</div>
						<div className="works-content">
							“I just moved to Austin and wanted to support local from the start. This made it so easy!” -
							Alandra S.
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Works2} alt="works2" />
						</div>
						<div className="works-content">
							“Quick Street helped me find new found favorite vendors. Its like a whole new city to me!” -
							Sam B.
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<img src={Works3} alt="works3" />
						</div>
						<div className="works-content">
							“As a vendor this helped so many stressors I used to have throughout my week; now I can
							focus more time on my craft. It’s great!” - Tracee W.
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
						<div className="footer-bottom-row-blank" />
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
