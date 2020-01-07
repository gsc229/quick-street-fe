import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer = (props) => {

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

  const test = () => {
    console.log(props);
  }

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 41.3309,
        lng: -75.7430
      }}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 41.337107, lng: -75.729503 }}
        name={'Vendor 1'}
      />
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 41.343326, lng: -75.73843 }}
        name={'Vendor2'}
      />
      <InfoWindow
        marker={marker.activeMarker}
        visible={marker.showingInfoWindow}
        onClose={onClose}
      >
        {marker.selectedPlace.name && (
          <div>
            <h4>{marker.selectedPlace.name}</h4>
          </div>
        )}
      </InfoWindow>
    </Map>
    // <>
    // <h1>Map</h1>
    // <h1>{this.test()}</h1>
    // </>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(MapContainer);