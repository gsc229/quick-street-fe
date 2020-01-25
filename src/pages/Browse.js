// ** Browse lists of vendors page ** //
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Map, Search } from '../components/index';

const Browse = (props) => {
	// console.log('The browse props are', props);
	const [cart, setCart] = useState([{ item: {} }]);
	const [zipcode, setZipcode] = useState('');
	const [vendors, setVendors] = useState({
		count: '',
		vendorDetails: []
	});
	const [customerZip, setCustomerZip] = useState('');
	const customerId = localStorage.getItem('user_id');
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


		// Get the cart items on page load for navbar
		const getCartItems = () => {
			axiosWithAuth()
				.get(`customers/${customerId}/cart`)
				.then(response => {
					console.log("GET ViewV.Prod response: ", response)
					setCart(response.data.data.items);
				})
				.catch(err => console.log(err.response))
		}

		getCartItems()

	}, [])

	return (
		<div className="browse_container">

			<nav className="temporary_nav" style={{ color: 'red', textAlign: 'center' }} >
				<h1>Replace Me With Luis's Nav</h1>
				<h4>Mapping over shopping cart items</h4>
				{cart.map(item => (
					<>
						{console.log(item['item']['name'])}
						<h1>{item.item.name}</h1>
						<p>{item.price}</p>
						<p>{item.quantity}</p>
					</>
				))}

			</nav>
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
