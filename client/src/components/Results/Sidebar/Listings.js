import React from "react";

import Listing from "./Listing";

export default function Listings(props) {
    const handleLikedToggle = listing => {
        props.handleLikedToggle(listing);
    };

    return (
        <div className='sidebarListings'>
            {props.listings.map(listing => (
                <Listing
                    key={listing.id}
                    listing={listing}
                    handleLikedToggle={handleLikedToggle}
                />
            ))}
        </div>
    );
}
