// ** Browse lists of vendors page ** //
import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

// components
import { Map, Search, ShoppingCartItems, Modal } from '../components/index';

// styles
import browse from '../styles/scss/browse.module.scss';

const Browse = (props) => {
	// console.log('The browse props are', props);
	
	const [ cartModal, setCartModal ] = useState(false);
	const [ zipcode, setZipcode ] = useState('');
	const [ vendors, setVendors ] = useState({
		count: '',
		vendorDetails: []
	});
	const [customerZip, setCustomerZip] = useState('');
	
	const handleChange = (event) => {
		setCustomerZip(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const query = new URLSearchParams(props.location.search);
		// console.log('query', query);
		query.set('zip', customerZip);
		props.history.replace(`${props.location.pathname}?${query.toString()}`);
		getSearchResults(customerZip);
	};

	const getSearchResults = (zip) => {
		axiosWithAuth()
			.get(`/vendors/radius/${zip}/5`)
			.then((response) => {
				// console.log(response);
				setVendors({
					...vendors,
					count: response.data.count,
					vendorDetails: response.data.data
				});
				setZipcode(zip);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		const query = new URLSearchParams(props.location.search);
		const zip = query.get('zip');
		if (zip) {
			setCustomerZip(zip);
			getSearchResults(zip);
		}
	}, []);

	return (
		<div className={browse.container}>
			<p onClick={() => setCartModal(true)}>Shopping Cart</p>
			<Modal showModal={cartModal}>
				<ShoppingCartItems setCartModal={setCartModal} />
			</Modal>
			<div className={browse.temp_menu}>
		
			</div>

			<div className={browse.wrapper}>
				{zipcode === '' && <p>Enter a location to start browsing</p>}
				{zipcode !== '' && <p>Your results for</p>}
				<form onSubmit={handleSubmit}>
					<input
						name="zipcode"
						placeholder="zip code"
						onChange={handleChange}
						value={customerZip}
						className={browse.zipcode_input}
					/>
				</form>

				<Map zipcode={zipcode} vendors={vendors} height={300} width={1280} radius={8046} />
				<Search
					zipcode={zipcode}
					vendors={vendors}
					history={props.history}
					location={props.location}
					match={props.match}
				/>
			</div>
		</div>
	);
};

export default Browse;
