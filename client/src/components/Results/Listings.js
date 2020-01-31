import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./ListingsSidebar";
import FullScreenListing from "./FullScreenListing";

import "../../assets/stylesheets/listings.scss";

class Listings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = {
            latlng: {
                lat:
                    this.props.selectedListing.latitude === undefined
                        ? this.props.searchLocation.latlng.lat
                        : this.props.selectedListing.latitude,
                lng:
                    this.props.selectedListing.longitude === undefined
                        ? this.props.searchLocation.latlng.lng
                        : this.props.selectedListing.longitude
            }
            // latlng: {
            //     lat: this.props.searchLocation.latlng.lat,
            //     lng: this.props.searchLocation.latlng.lng
            // }
        };

        return this.props.listings.length === 0 ? (
            <Redirect to='/' />
        ) : (
            // return (
            <div
                className={
                    this.props.fullscreen
                        ? "resultsContainer fullscreen"
                        : "resultsContainer"
                }
            >
                <FullScreenListing />
                <div className='nonFullScreen'>
                    <Map
                        // listings={listings.listings}
                        listings={this.props.listings}
                        location={location}
                    />

                    <ListingsSidebar listings={this.props.listings} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listings: state.listings.listings,
    searchLocation: state.search.location,
    selectedListing: state.listings.selectedListing,
    fullscreen: state.listings.fullscreen
});

export default connect(mapStateToProps)(Listings);
