import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs
} from "react-google-maps";

import { setSelectedListing } from "../../actions/listingActions";

import mapStyles from "../../assets/mapStyles";

const MapComponent = props => {
    // eslint-disable-next-line
    // const [selectedListing, setSelectedListing] = useState(null);

    // eslint-disable-next-line
    const { location, listings } = props;

    // useEffect(() => {
    //     const listener = e => {
    //         if (e.key === "Escape") {
    //             setSelectedListing(null);
    //         }
    //     };
    //     window.addEventListener("keydown", listener);

    //     return () => {
    //         window.removeEventListener("keydown", listener);
    //     };
    // }, []);

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{
                lat: 52.4081,
                lng: -1.5105
                // lat: location.latlng.lat,
                // lng: location.latlng.lng
            }}
            defaultOptions={{ styles: mapStyles }}
        >
            {listings.map((listing, id) => (
                <Marker
                    key={id}
                    listingNumber={id}
                    position={{ lat: listing.latitude, lng: listing.longitude }}
                    // onClick={e => {
                    //     console.log("Selected listing " + i);
                    //     if (selectedListing !== i) {
                    //         setSelectedListing(i);
                    //     } else {
                    //         setSelectedListing(null);
                    //     }
                    // }}
                    onClick={e => {
                        console.log("Selected listing " + id);
                        props.onMarkerClick(id);
                    }}
                    icon={{
                        url: `https://image.flaticon.com/icons/svg/569/569212.svg`,
                        scaledSize: new window.google.maps.Size(30, 30)
                    }}
                />
            ))}
        </GoogleMap>
    );
};

const MapWrapped = withScriptjs(withGoogleMap(MapComponent));

class Map extends Component {
    

    handleSelectedListingChange = (id) => {
        console.log("Marker " + id + " selected");
        this.props.setSelectedListing(5);
    }

    render() {
        return (
            <div className='map'>
                <MapWrapped
                    listings={this.props.listings}
                    onMarkerClick={this.handleSelectedListingChange}
                    // location={location}
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAziShsAiM9ER0H6IrqETIrE00yzcOx124'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default connect(null, {
    setSelectedListing
})(Map);
