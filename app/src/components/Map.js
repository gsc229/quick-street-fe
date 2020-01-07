import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer = (props) => {

  const [ mapDetails, setMapDetails ] = useState({
    initialCenterLng: '',
    initialCenterLat: ''

  })

  const getGeocode = () => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.zipcode}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then(response => {
        // console.log(response);
        console.log(response.data.results[0].geometry.location);
        setMapDetails({
          ...mapDetails,
          initialCenterLat: response.data.results[0].geometry.location.lat,
          initialCenterLng: response.data.results[0].geometry.location.lng,
        })
      })
  }

  useEffect(() => {
    getGeocode();
  }, [props.zipcode])

  const [marker, setMarker] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  })

  // console.log(marker);

  const onMarkerClick = (props, marker, event) => {
    // console.log('props', props);
    // console.log('marker', marker);
    // console.log('event', event);
    setMarker({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  const onClose = (props) => {
    // console.log('props on close', props);
    if(marker.showingInfoWindow) {
      setMarker({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  return (
    <>
    {mapDetails.initialCenterLat && mapDetails.initialCenterLng && (
      <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: mapDetails.initialCenterLat,
        lng: mapDetails.initialCenterLng
      }}
    >
    {console.log(mapDetails.initialCenterLat)}
    {console.log(mapDetails.initialCenterLng)}
    </Map>
    )}
    </>
    

      
    // <>
    // <h1>Map</h1>
    // </>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(MapContainer);