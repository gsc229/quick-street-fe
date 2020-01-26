import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

//styles
import './carousel.css';
//images
const cookies = require('../../assets/images/landing/images/carousel/cookies.png');
const sammich = require('../../assets/images/landing/images/carousel/sammiches.png');
const ramen = require('../../assets/images/landing/images/carousel/ramen.png');
const egg = require('../../assets/images/landing/images/carousel/egg.png');

export default class CarouselTop extends Component {
	render() {
		return (
			<Carousel
				centerMode
				centerSlidePercentage={25}
				emulateTouch
				showThumbs={false}
				showIndicators={false}
				showStatus={false}
			>
				<div style={{ margin: 10 }}>
					<img src={cookies} alt="img" />
					<p className="content">
						Cookie Bites - Dietary friendly cookies with all locally sourced ingredients.
					</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={sammich} alt="img" />
					<p className="content">Brad's Bread- Seasonal breads from the region.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={ramen} alt="img" />
					<p className="content">One Meal - An easy way to have at least one meal.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={egg} alt="img" />
					<p className="content">Egg Dish - Omelettin’ it slide this time.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={ramen} alt="img" />
					<p className="content">One Meal - An easy way to have at least one meal.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={egg} alt="img" />
					<p className="content">Egg Dish - Omelettin’ it slide this time.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={ramen} alt="img" />
					<p className="content">One Meal - An easy way to have at least one meal.</p>
				</div>
				<div style={{ margin: 10 }}>
					<img src={egg} alt="img" />
					<p className="content">Egg Dish - Omelettin’ it slide this time.</p>
				</div>
			</Carousel>
		);
	}
}
