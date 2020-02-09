import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./Sidebar/ListingsSidebar";
import FullScreenListing from "./Fullscreen/FullScreenListing";
import Amenities from "./Fullscreen/Amenities";

import { getAreaData } from "../../actions/areaActions";
import { setSortBy, setListingLiked } from "../../actions/listingActions";

import "../../assets/stylesheets/index.scss";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingsMode: 1
        };
    }

    componentDidMount() {
        if (this.props.searchLocation.postcode && !this.props.area.location) {
            this.props.getAreaData({
                location: this.props.searchLocation.postcode,
                numBedrooms: 2
            });
        }
    }

    handleLikedToggle = id => {
        console.log("bout to dispatch4");
        this.props.setListingLiked(id);
    };

    sortListings = (listings, sortBy) => {
        switch (sortBy) {
            case "priceLowHigh":
                console.log("Sort by low to high");
                return listings.sort((a, b) => a.price - b.price);
            case "priceHighLow":
                console.log("Sort by high to low");
                return listings.sort((a, b) => b.price - a.price);
            default:
                return listings;
        }
    };

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

        const sortedListings = this.sortListings(
            this.props.listings,
            this.props.sortBy
        );

        const sortedFavourites = this.sortListings(
            this.props.favourites,
            this.props.sortBy
        );

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
                    <Map listings={sortedListings} location={location} />

                    <ListingsSidebar
                        listings={sortedListings}
                        favourites={sortedFavourites}
                        numListings={this.props.numListings}
                        handleLikedToggle={this.handleLikedToggle}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listings: state.listings.listings,
    favourites: state.listings.favourites,
    numListings: state.listings.numListings,
    sortBy: state.listings.sortBy,
    searchLocation: state.search.location,
    selectedListing: state.listings.selectedListing,
    fullscreen: state.listings.fullscreen,
    area: state.area
});

export default connect(mapStateToProps, {
    getAreaData,
    setSortBy,
    setListingLiked
})(Results);
