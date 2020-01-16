import React from 'react';
import { Link } from 'react-router-dom';

const CustomerConfirmation = (props) => {
	const { email, password } = props.values;

	const cancel = (event) => {
		event.preventDefault();
		props.previousStep();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(props.values);
		// POST request to backend
	};

	return (
		<div className="main_container">
			<div className="form_container">
				<div className="customer_confrim_wapper">
					<h1>The ability for customers to create an account is still under construction.</h1>
					<h1>Thanks for your patience</h1>
					<div className="vendor_confirmation_div">
						<button className="confirm_button">
							<Link to="/browse">Browse</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerConfirmation;
