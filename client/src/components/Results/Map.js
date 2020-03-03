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
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dumbbell" class="svg-inline--fa fa-dumbbell fa-w-20" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"></path></svg>';
            case "restaurant":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="utensils" class="svg-inline--fa fa-utensils fa-w-13" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512"><path fill="currentColor" d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path></svg>';
            case "primary_school":
            case "secondary_school":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="school" class="svg-inline--fa fa-school fa-w-20" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path></svg>';
            case "park":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tree" class="svg-inline--fa fa-tree fa-w-12" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></path></svg>';
            case "post_office":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mail-bulk" class="svg-inline--fa fa-mail-bulk fa-w-18" width="50" height="25" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path></svg>';
            case "airport":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plane" class="svg-inline--fa fa-plane fa-w-18" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path></svg>';
            case "supermarket":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pizza-slice" class="svg-inline--fa fa-pizza-slice fa-w-16" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path></svg>';
            case "train_station":
                return '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="train" class="svg-inline--fa fa-train fa-w-14" role="img" width="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zm-48 136V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24zm-176 64c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"></path></svg>';
        }
    };

    const colors = [
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "#ffa600"
    ];

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
                            url: "data:image/svg+xml;utf8," + getIcon(type),
                            strokeWeight: 0.2,
                            strokeColor: colors[i],
                            strokeOpacity: 1,
                            fillColor: colors[i],
                            scale: 0.075,
                            fillOpacity: 1
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
