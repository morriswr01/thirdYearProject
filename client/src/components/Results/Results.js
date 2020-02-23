import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// eslint-disable-next-line
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./Sidebar/ListingsSidebar";
import FullScreenListing from "./Fullscreen/FullScreenListing";
import Amenities from "./Fullscreen/Ameneties/Amenities";

import { getAreaData } from "../../actions/areaActions";
import {
    setSortBy,
    setListingLiked,
    getFavourites
} from "../../actions/listingActions";
import { getLocalAmenities } from "../../actions/amenityActions";
import { logout } from "../../actions/authActions";

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
        this.props.getFavourites();
        this.props.getLocalAmenities();
    }

    handleLikedToggle = listing => {
        this.props.setListingLiked(listing);
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
                <FullScreenListing />
                <Amenities
                    searchLocation={this.props.search.location.latlng}
                    selectedListing={this.props.selectedListing}
                    fullscreen={this.props.fullscreen}
                    amenities={this.props.amenities}
                />
                <div className='nonFullScreen'>
                    <Map listings={sortedListings} location={location} />

                    <ListingsSidebar
                        listings={sortedListings}
                        favourites={sortedFavourites}
                        numListings={this.props.numListings}
                        handleLikedToggle={this.handleLikedToggle}
                        auth={this.props.auth}
                        logout={this.props.logout}
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
    search: state.search,
    auth: state.auth,
    amenities: state.amenities.amenities,
    area: state.area
});

export default connect(mapStateToProps, {
    getAreaData,
    setSortBy,
    logout,
    setListingLiked,
    getFavourites,
    getLocalAmenities
})(Results);
