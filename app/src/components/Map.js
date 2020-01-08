import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Map = (props) => {

  const [ mapDetails, setMapDetails ] = useState({
    lng: 0,
    lat: 0
  });

  const getGeocode = () => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.zipcode}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then(response => {
        // console.log(response);
        // console.log(response.data.results[0].geometry.location);
        setMapDetails({
          ...mapDetails,
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng,
        })
      })
  };

  useEffect(() => {
    getGeocode();
  }, [props.zipcode]);

  useEffect(() => {
    let options = {
      center: { lat: mapDetails.lat, lng: mapDetails.lng },
      zoom: 11, 
      // zoomControl: false, 
      // gestureHandling: 'none'
    }
    const map = new window.google.maps.Map(document.getElementById('map'), options);
    
    let cityCircle = new window.google.maps.Circle({
      strokeColor: '#B706F5',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'transparent',
      fillOpacity: 0.35,
      map: map,
      center: { lat: mapDetails.lat, lng: mapDetails.lng },
      radius: 5000
    });
  }, [mapDetails]); 
    
  return (
    <div style={{ width: 900, height: 500 }} id='map' />
  );
  
}

export default Map;