// ** Browse lists of vendors page ** //
import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { Map, Search } from '../components/index';

const Browse = (props) => {
	const [ zipcode, setZipcode ] = useState('');
	const [ vendors, setVendors ] = useState({
		count: '',
		vendorDetails: []
	});
	const [ customerZip, setCustomerZip ] = useState('');

	const handleChange = (event) => {
		setCustomerZip(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const query = new URLSearchParams(props.location.search);
		// console.log('query', query);
		query.set('zip', customerZip)
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
	}

	useEffect(() => {
		const query = new URLSearchParams(props.location.search);
		const zip = query.get('zip');
		if (zip) {
			setCustomerZip(zip);
			getSearchResults(zip);
		}
	}, [])
	
	return (
		<div className="browse_container">
			<div className="search_wrapper">
				{zipcode === '' && <p className="zipcode_title">Enter a location to start browsing</p>}
				{zipcode !== '' && <p className="zipcode_title">Your results for</p>}
				<form onSubmit={handleSubmit}>
					<input
						name="zipcode"
						placeholder="zip code"
						onChange={handleChange}
						value={customerZip}
						className="zipcode_input"
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
