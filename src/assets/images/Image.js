import React from 'react';
export const works1 = require('./landing/images/works-1.png');
export const works2 = require('./landing/images//works-2.png');
export const works3 = require('./landing/images/works-3.png');
export const carousel = require('./landing/images/carousel.png');
export const cookies = require('./landing/images/cookies.png');
export const testimonial1 = require('./landing/images/testimonial-1.png');
export const testimonial2 = require('./landing/images/testimonial-2.png');
export const testimonial3 = require('./landing/images/testimonial-3.png');
export const registersuccess = require('./Register/register_success.png');
export const loginlogo = require('../images/Login/loginLogo-375.png');
const Image = (props) => {
	switch (props.name) {
		case 'Works1':
			return <img src={works1} alt="img" />;
		case 'Works2':
			return <img src={works2} alt="img" />;
		case 'Works3':
			return <img src={works3} alt="img" />;
		case 'Carousel':
			return <img src={carousel} alt="img" />;
		case 'Cookies':
			return <img src={cookies} alt="img" />;
		case 'Testimonial1':
			return <img src={testimonial1} alt="img" />;
		case 'Testimonial2':
			return <img src={testimonial2} alt="img" />;
		case 'Testimonial3':
			return <img src={testimonial3} alt="img" />;
		case 'RegisterSuccess':
			return <img src={registersuccess} alt="img" />;
		case 'LoginLogo':
			return <img src={loginlogo} alt="img" />;
		default:
			return;
	}
};

export default Image;
