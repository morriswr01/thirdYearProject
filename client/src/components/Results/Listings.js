import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./ListingsSidebar";

import * as listings from "../../assets/Listings";

import "../../assets/stylesheets/listings.scss";

class Listings extends Component {
    render() {
        // return this.props.listings.length === 0 ? (
        //     <Redirect to='/' />
        // ) : (
        return (
            <div className='resultsContainer'>
                <Map
                    // listings={listings.listings}
                    listings={this.props.listings}
                    // location={this.props.location}
                />
                <ListingsSidebar listings={listings.listings} />
                {/* Put full screen view here */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // location: state.search.location,
    listings: state.search.listings
});

export default connect(mapStateToProps)(Listings);
