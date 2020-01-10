import React from 'react';

// styling
import '../LandingPage/landing.css';

// Images
import Image from '../../assets/landing/images/Image';

// Components
import Footer from '../Footer';
import Menu from '../Menu';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="landingContainer">
				<div className="heroContainer">
			<Menu/>
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
					<div className="marketing-box-top-row">
					<h1>Browse, buy, share your finds on local food vendors.</h1>
					<p>Not sure yet? That’s ok, start by browsing our vendors that are already making moves.</p>
					<div className="marketing-box-top-row-btn ">Start Browsing</div>
					</div>
					<div className="marketing-box-bottom-row"> 
					<div className="marketing-box-bottom-row-card-wrapper">
						<Image name="Cookies" />
						<p><span>Cookie Bites - Dietary friendly cookies with all locally sourced ingredients.</span></p>
						</div>
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
							See what you like? We have a seamless order request process for both sides. Win-win.{' '}
						</div>
					</div>
				</div>
				<div className="marketing-Header"> Our Spotlight Vendors For This Month</div>
				<div className="carousel-container">
				<Image name="Carousel" />

				</div>
				<div className="marketing-Header">Testimonials</div>
				<div className="testimonial-container">
					<div className="testimonial-card-wrapper">
						<div className="testimonial-image">
						<Image name="Testimonial1" />
						</div>
						<div className="testimonial-content">
							<p>“I just moved to Austin and wanted to support local from the start. This made it so easy!” -
							Alandra S.</p>
							<div className="testimonial-button">
							Start Now!
						</div>
						</div>
					
					</div>
					<div className="testimonial-card-wrapper">
						<div className="testimonial-image">
						<Image name="Testimonial2" />
						</div>
						<div className="testimonial-content">
							<p>“Quick Street helped me find new found favorite vendors. Its like a whole new city to me!” -
							Sam B.</p>
							<div className="testimonial-button">
							Start Now!
							</div>
						</div>
					</div>
					<div className="testimonial-card-wrapper">
						<div className="testimonial-image">
						<Image name="Testimonial3" />
						</div>
						<div className="testimonial-content">
							<p>“As a vendor this helped so many stressors I used to have throughout my week; now I can
							focus more time on my craft. It’s great!” - Tracee W.</p>
							<div className="testimonial-button">
							Start Now!
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
				<Footer />
				</div>
			</div>
		);
	}
}

export default LandingPage;
