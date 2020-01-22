import React from 'react';
import '../../styles/scss/custombutton.scss';

const CustomButton = ({ children, styleClass, ...otherProps }) => {
	return (
		<button className={`${styleClass}`} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
