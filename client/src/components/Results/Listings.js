import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./Sidebar/ListingsSidebar";
import FullScreenListing from "./Fullscreen/FullScreenListing";
import Amenities from "./Fullscreen/Amenities";

import "../../assets/stylesheets/index.scss";

class Listings extends Component {
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
                <Amenities />
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
