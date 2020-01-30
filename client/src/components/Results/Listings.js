import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./ListingsSidebar";
import FullScreenListing from "./FullScreenListing";

import * as listings from "../../assets/Listings";

import "../../assets/stylesheets/listings.scss";

class Listings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return this.props.listings.length === 0 ? (
        //     <Redirect to='/' />
        // ) : (
        return (
            <div
                className={
                    this.props.fullscreen
                        ? "resultsContainer fullscreen"
                        : "resultsContainer"
                }
            >
                <FullScreenListing listings={listings.listings} />
                <div className='nonFullScreen'>
                    <Map
                        // listings={listings.listings}
                        listings={this.props.listings}
                        // location={this.props.location}
                    />

                    <ListingsSidebar listings={listings.listings} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // location: state.search.location,
    listings: state.listings.listings,
    fullscreen: state.listings.fullscreen
});

export default connect(mapStateToProps)(Listings);
