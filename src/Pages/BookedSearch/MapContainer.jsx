
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '40%',
    height: '760px',
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 22.359296, // Latitude of the location you want to display
        lng: 91.821864, // Longitude of the location you want to display
      }}
    >
      <Marker
        position={{
          lat: 22.359296, // Latitude of the location you want to display
          lng: 91.821864, // Longitude of the marker
        }}
        title={'Marker Title'}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVNBq3e7RBcGWGtBXIva-BLbkSiE1C1Z4', // Replace with your API key
})(MapContainer);
