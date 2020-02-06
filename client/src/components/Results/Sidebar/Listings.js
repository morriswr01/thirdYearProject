import React from "react";

import Listing from "./Listing";

export default function Favourites(props) {
    return (
        <div className='sidebarListings'>
            {props.listings.map((listing, i) => (
                <Listing key={i} listingNumber={i} listing={listing} />
            ))}
        </div>
    );
}
