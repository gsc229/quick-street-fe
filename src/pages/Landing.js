import React from 'react';
import { Link } from 'react-router-dom';
// styling
import landing from '../styles/scss/landing.module.scss';

// Images
import Image from '../assets/images/Image';

// Components
import { Menu, LandingGallery, CarouselTop, CarouselTopMobile, CustomButton } from '../components/index';

const Landing = () => {
	return (
		<div className={landing.container}>
			<div className={landing.hero_container}>
				<Menu />
				<div className={landing.info}>
					<h1>Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony </h1>
					<div className={landing.button_container}>
						<CustomButton styleClass="red-full">
							<Link to="/register">I'm a Vendor!</Link>
						</CustomButton>
						<CustomButton styleClass="red-border">
							<Link to="/browse">I'm a Customer!</Link>
						</CustomButton>
					</div>
				</div>
			</div>
			<div className={landing.title_header}> See What We Offer!</div>
			<div className={landing.marketing_container}>
				<div className={landing.marketing_wrapper}>
					<div className={landing.top_row}>
						<h1>Browse, buy, share your finds on local food vendors.</h1>
						<div className={landing.top__button}>
							<CustomButton styleClass="red-full">
								<Link to="/browse">Start Browsing</Link>
							</CustomButton>
						</div>
					</div>
					<div className={landing.carousel_wrapper}>
						<CarouselTop />
					</div>
				</div>
			</div>
			<div className={landing.title_header}> How it Works</div>
			<div className={landing.works_container}>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Works1" />
					</div>
					<div className={landing.works_content}>
						<p>We help vendors gain visibility more consistently to their customer base.</p>
					</div>
				</div>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Works2" />
					</div>
					<div className={landing.works_content}>
						<p>
							As the customer, we can seamlessly support your local food vendor through a one stop shop
							search platform.
						</p>
					</div>
				</div>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Works3" />
					</div>
					<div className={landing.works_content}>
						<p>See what you like? We have a seamless order request process for both sides. Win-win</p>
					</div>
				</div>
			</div>
			<div className={landing.title_header}> Our Spotlight Vendors For This Month</div>
			<div className={landing.gallery_container}>
				<LandingGallery />
			</div>
			<div className={landing.title_header}>Testimonials</div>
			<div className={landing.works_container}>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Testimonial1" />
					</div>
					<div className={landing.works_content}>
						<p>
							“I just moved to Austin and wanted to support local from the start. This made it so easy!” -
							Alandra S.
						</p>
					</div>
				</div>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Testimonial2" />
					</div>
					<div className={landing.works_content}>
						<p>
							“Market Avenue helped me find new found favorite vendors. Its like a whole new city to me!”
							- Sam B.
						</p>
					</div>
				</div>
				<div className={landing.card_wrapper}>
					<div className={landing.works_image}>
						<Image name="Testimonial3" />
					</div>
					<div className={landing.works_content}>
						<p>
							“As a vendor this helped so many stressors I used to have throughout my week; now I can
							focus more time on my craft. It’s great!” - Tracee W.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
