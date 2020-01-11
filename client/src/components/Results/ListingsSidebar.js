import React from "react";
import PropTypes from "prop-types";

import Listing from "./Listing";

export default function ListingsSidebar(props) {
    const { listings } = props;

    return (
        <div className='sidebar'>
            {listings.map((listing, i) => (
                <Listing key={i} listingNumber={i} listing={listing} />
            ))}
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
