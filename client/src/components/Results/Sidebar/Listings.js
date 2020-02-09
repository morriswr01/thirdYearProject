import React from "react";

import Listing from "./Listing";

export default function Listings(props) {
    const handleLikedToggle = id => {
        console.log("bout to dispatch2");
        props.handleLikedToggle(id);
    };

    return (
        <div className='sidebarListings'>
            {props.listings.map(listing => (
                <Listing
                    key={listing._id}
                    listing={listing}
                    handleLikedToggle={handleLikedToggle}
                />
            ))}
        </div>
    );
}
