import React from 'react';
export const works1 = require('./works-1.png');
export const works2 = require('./works-2.png');
export const works3 = require('./works-3.png');
export const carousel = require('./carousel.png');
export const cookies = require('./cookies.png');
export const testimonial1 = require('./testimonial-1.png');

const Image = props => {
    switch (props.name) {
        case "Works1": 
        return <img src={works1} />;
        case "Works2": 
        return <img src={works2} />;
        case "Works3": 
        return <img src={works3} />;
        case "Carousel": 
        return <img src={carousel} />;
        case "Cookies": 
        return <img src={cookies} />;
        case "Testimonial1": 
        return <img src={testimonial1} />;
        default:
            return;
    }
}

export default Image;

 

