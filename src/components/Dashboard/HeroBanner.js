import React from 'react';

// styling
import herobanner from '../../styles/scss/herobanner.module.scss';
const HeroBanner = ({ name }) => {
	return (
		<div className={herobanner.wrapper}>
			AVATAR IMAGE
			<h1>HELLO {name}</h1>
		</div>
	);
};

export default HeroBanner;
