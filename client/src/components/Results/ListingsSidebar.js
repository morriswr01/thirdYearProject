import React from "react";
import PropTypes from "prop-types";

import Listing from "./Sidebar/Listing";
import Nav from "./Sidebar/Nav";

export default function ListingsSidebar(props) {
    const { listings } = props;

    return (
        <div className='listingsSidebar'>
            <Nav />
            <div className='resultTitle'>
                150 Results for <text className='searchAddress'>Coventry, CV5 6GB</text>
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
