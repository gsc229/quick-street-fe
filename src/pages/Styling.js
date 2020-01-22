import React from 'react';

// styles
import styling from '../styles/scss/styling.module.scss';

// component
import Image from '../assets/images/Image';

const Styling = () => {
	return (
		<div className={styling.container}>
			<div className={styling.wrapper}>
				<h1>Success!</h1>
				<div className={styling.image}>
					<Image name="RegisterSuccess" />
				</div>
				<p>Taking you to your profile page...</p>
			</div>
		</div>
	);
};

export default Styling;
