import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '250px',
  padding: "10px",
  borderRadius: "10px",
};

function MyComponent({biz}) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCzE55ntSoN9r45wvEzyV4NrgI6mE5rgro"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: biz.lat, lng: biz.lng}}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={{lat: biz.lat, lng: biz.lng }} />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
