import React from "react";

import Listing from "./Listing";

export default function Favourites(props) {
    const handleLikedToggle = id => {
        props.handleLikedToggle(id);
    };

    return (
        <div className='favouriteListings'>
            {props.favourites.map(listing => (
                <Listing
                    key={listing._id}
                    listing={listing}
                    handleLikedToggle={handleLikedToggle}
                />
            ))}
        </div>
    );
}
