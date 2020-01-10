import React, { compose, withProps, useState } from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs
} from "react-google-maps";

const MapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{
                lat: props.location.latlng.lat,
                lng: props.location.latlng.lng
            }}
        >
            {props.listings.map((listing, i) => (
                <Marker
                    key={i}
                    position={{ lat: listing.latitude, lng: listing.longitude }}
                    icon={{
                        url: `https://image.flaticon.com/icons/svg/569/569212.svg`,
                        scaledSize: new window.google.maps.Size(30, 30)
                    }}
                />
            ))}
        </GoogleMap>
    ))
);

export default function Map(props) {
    const { location, listings } = props;

    const [selectedListing, setSelectedListing] = useState(null);

    return (
        <div className='map'>
            <MapComponent
                listings={listings}
                location={location}
                googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAziShsAiM9ER0H6IrqETIrE00yzcOx124'
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
