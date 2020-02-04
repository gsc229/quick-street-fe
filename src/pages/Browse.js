// ** Browse lists of vendors page ** //
import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// components
import {
	Map,
	Search,
	Menu,
	ShoppingCartItems,
	Modal,
	Nav,
	Footer
} from '../components/index';

// styles
import browse from '../styles/scss/browse.module.scss';

const Browse = (props) => {
	// console.log('The browse props are', props);

	const [zipcode, setZipcode] = useState('');
	const [query, setQuery] = useState([]);

	const [vendors, setVendors] = useState({
		count: '',
		vendorDetails: []
	});
	const [customerZip, setCustomerZip] = useState('');
	// const customerId = localStorage.getItem('user_id');

	const handleChange = (event) => {
		setCustomerZip(event.target.value);
	};

	const handleQueryChange = (event) => {
		console.log(event.target.value);

		if (!query.includes(event.target.value)) {
			setQuery([...query, event.target.value]);
		} else {
			setQuery(query.filter((el) => el !== event.target.value));
		}
	};

	// console.log(`query`, query);

	const handleSubmit = (event) => {
		event.preventDefault();
		const query = new URLSearchParams(props.location.search);
		// console.log('query', query);
		query.set('zip', customerZip);
		props.history.replace(`${props.location.pathname}?${query.toString()}`);
		getSearchResults(customerZip);
	};

	const getSearchResults = (zip) => {
		const queryString = query.join('&');
		// console.log(queryString);
		axiosWithAuth()
			.get(`/vendors/radius/${zip}/5/?${queryString}`)
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
		<React.Fragment>
			<div className={browse.temp_menu}>
				<Nav />
			</div>

			<div className={browse.wrapper}>

				<form className={browse.filter_container} onSubmit={handleSubmit}>
					<div className={browse.filter_wrapper}>
						{zipcode === '' && <p>Enter a location to start browsing</p>}
						{zipcode !== '' && <p>Your results for</p>}
						<input
							name="zipcode"
							placeholder="zip code"
							onChange={handleChange}
							value={customerZip}
							className={browse.zipcode_input}
						/>

					</div>
					<div className={browse.filter_wrapper}>
						<p>Filter by vendor category</p>
						<div className={`form-check ${browse.checkbox_container}`}>
							<div>
								<input
									onChange={handleQueryChange}
									name="vegetables"
									type="checkbox"
									value="vendor_category[in]=Vegetables"
								/>
								<label for="defaultCheck1">Vegetables</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="fruits"
									type="checkbox"
									value="vendor_category[in]=Fruits"
								/>
								<label for="defaultCheck1">Fruits</label>
							</div>

							<div>
								<input
									onChange={handleQueryChange}
									name="breads"
									type="checkbox"
									value="vendor_category[in]=Breads"
								/>
								<label for="defaultCheck1">Breads</label>
							</div>

							<div>
								<input
									onChange={handleQueryChange}
									name="beverages"
									type="checkbox"
									value="vendor_category[in]=Beverages"
								/>
								<label for="defaultCheck1">Beverages</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="spreads"
									type="checkbox"
									value="vendor_category[in]=Spreads"
								/>
								<label for="defaultCheck1">Spreads</label>
							</div>

							<div>
								<input
									onChange={handleQueryChange}
									name="baked goods"
									type="checkbox"
									value="vendor_category[in]=Baked goods"
								/>
								<label for="defaultCheck1">Baked Goods</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="other"
									type="checkbox"
									value="vendor_category[in]=Others"
								/>
								<label for="defaultCheck1">Others</label>
							</div>

						</div>
					</div>
					<div className={browse.filter_wrapper}>
						<p>Filter by Diet Category</p>
						<div className={browse.checkbox_container}>

							<div>
								<input
									onChange={handleQueryChange}
									name="vegan"
									type="checkbox"
									value="diet_categories[in]=Vegan"
								/>
								<label for="defaultCheck1">Vegan</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="keto"
									type="checkbox"
									value="diet_categories[in]=Keto"
								/>
								<label for="defaultCheck1">Keto</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="Dairy Free"
									type="checkbox"
									value="diet_categories[in]=Dairy Free"
								/>
								<label for="defaultCheck1">Dairy Free</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="gluten free"
									type="checkbox"
									value="diet_categories[in]=Gluten Free"
								/>
								<label for="defaultCheck1">Gluten Free</label>
							</div>
							<div>
								<input
									onChange={handleQueryChange}
									name="vegetarian"
									type="checkbox"
									value="diet_categories[in]=Vegetarian"
								/>
								<label for="defaultCheck1">Vegetarian</label>
							</div>

						</div>
					</div>
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
			<Footer />
		</React.Fragment>
	);
};
export default Browse;
