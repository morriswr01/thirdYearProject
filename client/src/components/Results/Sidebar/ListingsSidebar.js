import React, { useState } from "react";
import PropTypes from "prop-types";

import Listing from "./Listing";
import Nav from "./Nav";
import SortBy from "./SortBy";
import FilterContainer from "./Filter/FilterContainer";
import ToggleFavourites from "./ToggleFavourites";
import Favourites from "./Favourites";

export default function ListingsSidebar(props) {
    const [radioButtons, setRadioButtons] = useState(1);

    const handleToggleChange = radius => {
        setRadioButtons(radius);
    };

    const { listings, numListings } = props;
    return (
        <div className='listingsSidebar'>
            <Nav />
            <div className='resultTitle'>
                <h1>
                    {numListings} Results for{" "}
                    <p className='searchAddress'>Coventry, CV5 6GB</p>
                </h1>
            </div>
            <div className='sortFilterAndFavourites'>
                <SortBy />
                <ToggleFavourites
                    handleToggleChange={handleToggleChange}
                    toggle={radioButtons}
                />
                <FilterContainer />
            </div>
            <div
                className={
                    radioButtons == 2
                        ? "sidebarListingsContainer favourites"
                        : "sidebarListingsContainer"
                }
            >
                <div className='sidebarListings'>
                    {listings.map((listing, i) => (
                        <Listing key={i} listingNumber={i} listing={listing} />
                    ))}
                </div>
                <div className='favouriteListings'>
                    {listings.map((listing, i) => (
                        <Listing key={i} listingNumber={i} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
