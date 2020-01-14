import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// styling
import '../LandingPage/landing.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Images
import Image from '../../assets/landing/images/Image';

// Components
import Footer from '../Footer';
import Menu from '../Menu';
import CarouselBrowse from './CarouselBrowse';
import CarouselTop from './CarouselTop';
class LandingPage extends React.Component {
	render() {
		return (
			<div className="landingContainer">
				<div className="heroContainer">
					<Menu />
					<div className="landingInfo">
						<p>Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony </p>
						<div className="button-container">
							<div className="vendorButton">
								<Link to="/register">I'm a Vendor!</Link>
							</div>
							<div className="customerButton">
								<Link to="/browse">I'm a Customer!</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="marketing-Header"> See What We Offer!</div>
				<div className="marketing-Container">
					<div className="marketing-box-top-row">
						<h1>Browse, buy, share your finds on local food vendors.</h1>
						<div className="marketing-box-top-row-btn ">Start Browsing</div>
					</div>
					<div className="marketing-box-bottom-row">
						<CarouselTop />
					</div>
				</div>
				<div className="marketing-Header"> How it Works</div>
				<div className="works-container">
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Works1" />
						</div>
						<div className="works-content">
							We help vendors gain visibility more consistently to their customer base
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Works2" />
						</div>
						<div className="works-content">
							As the customer, we can seamlessly support your local food vendor through a one stop shop
							search platform.
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Works3" />
						</div>
						<div className="works-content">
							See what you like? We have a seamless order request process for both sides. Win-win.
						</div>
					</div>
				</div>
				<div className="marketing-Header"> Our Spotlight Vendors For This Month</div>
				<div className="carousel-container">
					<CarouselBrowse />
				</div>
				<div className="marketing-Header">Testimonials</div>
				<div className="works-container">
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Testimonial1" />
						</div>
						<div className="works-content">
							“I just moved to Austin and wanted to support local from the start. This made it so easy!” -
							Alandra S.
							<div className="testimonial-button">Start Now!</div>
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Testimonial2" />
						</div>
						<div className="works-content">
							<p>
								“Quick Street helped me find new found favorite vendors. Its like a whole new city to
								me!” - Sam B.
							</p>
							<div className="testimonial-button">Start Now!</div>
						</div>
					</div>
					<div className="works-card-wrapper">
						<div className="works-image">
							<Image name="Testimonial3" />
						</div>
						<div className="works-content">
							<p>
								“Quick Street helped me find new found favorite vendors. Its like a whole new city to
								me!” - Sam B.
							</p>
							<div className="testimonial-button">Start Now!</div>
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
					<Footer />
				</div>
			</div>
		);
	}
}

export default LandingPage;
