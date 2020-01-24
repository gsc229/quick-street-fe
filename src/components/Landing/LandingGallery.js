import * as React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
const Slide1 = require('../../assets/images/landing/images/carousel/CarlasHipsterBrunch.png');
const Slide2 = require('../../assets/images/landing/images/carousel/MyukosDelivery.png');
const Slide3 = require('../../assets/images/landing/images/carousel/KenChiBanner.png');

function LandingGallery() {
	const [ index, setIndex ] = React.useState(0);

	const images = [
		{
			src: `${Slide1}`
		},
		{
			src: `${Slide2}`
		},
		{
			src: `${Slide3}`
		}
	];

	return (
		<div style={{ background: 'white', width: '100%', height: '100%' }}>
			<Gallery
				index={index}
				onRequestChange={(i) => {
					setIndex(i);
				}}
			>
				{images.map((img) => <GalleryImage objectFit="contain" key={img.src} src={img.src} />)}
			</Gallery>
		</div>
	);
}

export default LandingGallery;
