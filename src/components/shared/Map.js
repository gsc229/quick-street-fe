import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/css/map.css';

const Map = (props) => {
	// console.log('props in map.js', props);
	const [ mapDetails, setMapDetails ] = useState({
		lng: -78.435315,
		lat: 28.644141,
		isDefault: false
	});

	const getGeocode = () => {
		// console.log(props.zipcode);
		console.log(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${props.zipcode}&key=${process.env
					.REACT_APP_GOOGLE_MAPS_API_KEY}`
			)
			.then((response) => {
				// console.log(response);
				// console.log(response.data.results[0].geometry.location);
				setMapDetails({
					...mapDetails,
					lat: response.data.results[0].geometry.location.lat,
					lng: response.data.results[0].geometry.location.lng,
					isDefault: true
				});
			});
	};

	// useEffect(
	// 	() => {
	// 		if (props.zipcode !== '') {
	// 			getGeocode();
	// 		}
	// 	},
	// 	[ props.zipcode ]
	// );

	// useEffect(
	// 	() => {
	// 		let options = {
	// 			center: { lat: mapDetails.lat, lng: mapDetails.lng },
	// 			zoom: mapDetails.isDefault ? 11 : 5,
	// 			zoomControl: false,
	// 			gestureHandling: 'none'
	// 		};
	// 		const map = new window.google.maps.Map(document.getElementById('map'), options);

	// 		if (mapDetails.isDefault) {
	// 			let cityCircle = new window.google.maps.Circle({
	// 				strokeColor: '#B706F5',
	// 				strokeOpacity: 0.8,
	// 				strokeWeight: 2,
	// 				fillColor: 'transparent',
	// 				fillOpacity: 0.35,
	// 				map: map,
	// 				center: { lat: mapDetails.lat, lng: mapDetails.lng },
	// 				radius: props.radius
	// 			});
	// 		}
	// 	},
	// 	[ mapDetails ]
	// );
	// return <div id="map" />;
	return <h1>Map</h1>
};

export default Map;
