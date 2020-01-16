import React from 'react';
export const works1 = require('./works-1.png');
export const works2 = require('./works-2.png');
export const works3 = require('./works-3.png');
export const carousel = require('./carousel.png');
export const cookies = require('./cookies.png');
export const testimonial1 = require('./testimonial-1.png');
export const testimonial2 = require('./testimonial-2.png');
export const testimonial3 = require('./testimonial-3.png');

const Image = props => {
  switch (props.name) {
    case 'Works1':
      return <img src={works1} alt='img' />;
    case 'Works2':
      return <img src={works2} alt='img' />;
    case 'Works3':
      return <img src={works3} alt='img' />;
    case 'Carousel':
      return <img src={carousel} alt='img' />;
    case 'Cookies':
      return <img src={cookies} alt='img' />;
    case 'Testimonial1':
      return <img src={testimonial1} alt='img' />;
    case 'Testimonial2':
      return <img src={testimonial2} alt='img' />;
    case 'Testimonial3':
      return <img src={testimonial3} alt='img' />;
    default:
      return;
  }
};

export default Image;
