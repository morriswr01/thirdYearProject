import React from "react";

import Listing from "./Listing";

export default function Favourites(props) {
    const localFavourites = props.listings.filter(listing => listing.liked);

    const handleLikedToggle = id => {
        props.handleLikedToggle(id);
    };

    return (
        <div className='favouriteListings'>
            {localFavourites.map(listing => (
                <Listing
                    key={listing._id}
                    listing={listing}
                    handleLikedToggle={handleLikedToggle}
                />
            ))}
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
