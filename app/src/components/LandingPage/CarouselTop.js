import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
//images
const cookies = require('../../assets/landing/images/carousel/cookies.png');
const sammich = require('../../assets/landing/images/carousel/sammiches.png');
const ramen = require('../../assets/landing/images/carousel/ramen.png');
const egg = require('../../assets/landing/images/carousel/egg.png')



export default class CarouselTop extends Component {
    render() {
        return (
            <Carousel centerMode centerSlidePercentage={25} emulateTouch showThumbs={false} showIndicators={false} showStatus={false}>
                <div style={{margin: 10 }}>
                    <img src={cookies} />
                    <p className="content">Cookie Bites - Dietary friendly cookies with all locally sourced ingredients.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={sammich} />
                    <p className="content">Brad's Bread- Seasonal breads from the region.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={ramen} />
                    <p className="content">One Meal - An easy way to have at least one meal.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={egg} />
                    <p className="content">Egg Dish - Omelettin’ it slide this time.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={ramen} />
                    <p className="content">One Meal - An easy way to have at least one meal.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={egg} />
                    <p className="content">Egg Dish - Omelettin’ it slide this time.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={ramen} />
                    <p className="content">One Meal - An easy way to have at least one meal.</p>
                </div>
                <div style={{margin: 10 }}>
                <img src={egg} />
                    <p className="content">Egg Dish - Omelettin’ it slide this time.</p>
                </div>
            </Carousel>
        );
    }
};
 
