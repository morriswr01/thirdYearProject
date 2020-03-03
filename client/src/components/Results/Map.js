import React, { Component } from "react";
import { connect } from "react-redux";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs
} from "react-google-maps";

import "../../assets/stylesheets/markers.scss";

import markers from "fontawesome-markers";

import { setSelectedListing } from "../../actions/listingActions";

import mapStyles from "../../assets/mapStyles";

const MapComponent = props => {
    // eslint-disable-next-line
    const { location, listings, amenities } = props;

    const getIcon = type => {
        switch (type) {
            case "gym":
                return "https://image.flaticon.com/icons/svg/418/418154.svg";
            case "restaurant":
                return "https://image.flaticon.com/icons/svg/1046/1046835.svg";
            case "primary_school":
            case "secondary_school":
                return "https://image.flaticon.com/icons/svg/1656/1656768.svg";
            case "park":
                return "https://image.flaticon.com/icons/svg/490/490091.svg";
            case "post_office":
                return "https://image.flaticon.com/icons/svg/726/726580.svg";
            case "airport":
                return "https://image.flaticon.com/icons/svg/984/984233.svg";
            case "supermarket":
                return "https://image.flaticon.com/icons/svg/2645/2645791.svg";
            case "train_station":
                return "https://image.flaticon.com/icons/svg/2636/2636390.svg";
        }
    };

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{
                lat: location.latlng.lat,
                lng: location.latlng.lng
            }}
            defaultOptions={{ styles: mapStyles }}
        >
            {listings.map(listing => (
                <Marker
                    key={listing.id}
                    listingNumber={listing.id}
                    listing={listing}
                    position={{ lat: listing.latitude, lng: listing.longitude }}
                    onClick={e => {
                        console.log("Selected listing " + listing.id);
                        props.onMarkerClick(listing.id, listing);
                    }}
                    icon={{
                        path: markers.HOME,
                        strokeWeight: 0.2,
                        strokeColor: "black",
                        strokeOpacity: 1,
                        fillColor:
                            props.selectedListing.latitude === listing.latitude
                                ? "#292b2c"
                                : "#00895a",
                        scale:
                            props.selectedListing.latitude === listing.latitude
                                ? 0.75
                                : 0.5,
                        fillOpacity: 1
                    }}
                />
            ))}
            {Object.keys(amenities).map((key, i) => {
                const { type, location } = amenities[key];
                return (
                    <Marker
                        key={i}
                        position={{
                            lat: location.lat,
                            lng: location.lng
                        }}
                        className='marker'
                        icon={{
                            url: getIcon(type),
                            scaledSize: new window.google.maps.Size(30, 30)
                        }}
                    />
                );
            })}
        </GoogleMap>
    );
};

const MapWrapped = withScriptjs(withGoogleMap(MapComponent));

class Map extends Component {
    handleSelectedListingChange = (id, listing) => {
        console.log("Marker " + id + " selected");
        this.props.setSelectedListing({
            ...listing,
            listingNumber: id
        });
    };

    render() {
        return (
            <div className='map'>
                <MapWrapped
                    amenities={this.props.amenities}
                    listings={this.props.listings}
                    onMarkerClick={this.handleSelectedListingChange}
                    location={this.props.location}
                    selectedListing={this.props.selectedListing}
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAziShsAiM9ER0H6IrqETIrE00yzcOx124'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedListing: state.listings.selectedListing,
    amenities: state.amenities.amenities
});

export default connect(mapStateToProps, {
    setSelectedListing
})(Map);
