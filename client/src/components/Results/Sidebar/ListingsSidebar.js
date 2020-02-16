import React, { useState } from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";
import ResultsTitle from "./ResultsTitle";
import SortAndFilter from "./SortAndFilter/SortAndFilter";
import Listings from "./Listings";
import Favourites from "./Favourites";

export default function ListingsSidebar(props) {
    const [sidebarTab, setSidebarTab] = useState(1);

    const handleSidebarTabChange = radius => {
        setSidebarTab(radius);
    };

    const handleLikedToggle = listing => {
        props.handleLikedToggle(listing);
    };

    const { listings, favourites, numListings } = props;
    return (
        <div className='listingsSidebar'>
            <Nav auth={props.auth} logout={props.logout} />
            <ResultsTitle numListings={numListings} />
            <SortAndFilter
                sidebarTab={sidebarTab}
                handleToggleChange={handleSidebarTabChange}
            />
            <div
                className={
                    sidebarTab === 2
                        ? "sidebarListingsContainer favourites"
                        : "sidebarListingsContainer"
                }
            >
                <Listings
                    listings={listings}
                    handleLikedToggle={handleLikedToggle}
                />
                <Favourites
                    favourites={favourites}
                    handleLikedToggle={handleLikedToggle}
                />
            </div>
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
