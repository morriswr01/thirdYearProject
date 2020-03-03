import React, { Component } from "react";
import { connect } from "react-redux";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs
} from "react-google-maps";

import markers from "fontawesome-markers";
import { setSelectedListing } from "../../actions/listingActions";

import mapStyles from "../../assets/mapStyles";

const MapComponent = props => {
    // eslint-disable-next-line
    const { location, listings } = props;

    return (
        <GoogleMap
            defaultZoom={15}
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
                    // icon={{
                    //     url: `https://image.flaticon.com/icons/svg/569/569212.svg`,
                    //     scaledSize: new window.google.maps.Size(30, 30)
                    // }}
                    icon={{
                        path: markers.HOME,
                        strokeWeight: 0.2,
                        strokeColor: "black",
                        strokeOpacity: 1,
                        fillColor:
                            props.selectedListing.latitude === listing.latitude
                                ? "black"
                                : "#45B39C",
                        scale:
                            props.selectedListing.latitude === listing.latitude
                                ? 0.75
                                : 0.5,
                        fillOpacity: 1
                    }}
                />
            ))}
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
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(Map);
