import React from "react";
import PropTypes from "prop-types";

import Listing from "./Listing";

import Nav from "./Nav";
import SortBy from "./SortBy";

export default class ListingsSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: this.props.listings
        };
    }

    render() {
        const { listings } = this.state;

        return (
            <div className='listingsSidebar'>
                <Nav />
                <div className='resultTitle'>
                    <h1>
                        150 Results for{" "}
                        <p className='searchAddress'>Coventry, CV5 6GB</p>
                    </h1>
                </div>
                <SortBy />
                <div className='sidebarListings'>
                    {listings.map((listing, i) => (
                        <Listing key={i} listingNumber={i} listing={listing} />
                    ))}
                </div>
            </div>
        );
    }
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
