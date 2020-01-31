import React from "react";
import PropTypes from "prop-types";

import Listing from "./Listing";
import Nav from "./Nav";

export default function ListingsSidebar(props) {
    const { listings } = props;

    return (
        <div className='listingsSidebar'>
            <Nav />
            <div className='resultTitle'>
                <h1>
                    150 Results for{" "}
                    <p className='searchAddress'>Coventry, CV5 6GB</p>
                </h1>
            </div>
            <div className='sortAndFilter'>
                <h4>Filters and SortBy</h4>
            </div>
            <div className='sidebarListings'>
                {listings.map((listing, i) => (
                    <Listing key={i} listingNumber={i} listing={listing} />
                ))}
            </div>
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
