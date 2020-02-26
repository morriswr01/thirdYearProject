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
            <ResultsTitle
                auth={props.auth}
                numListings={numListings}
                saveSearch={props.saveSearch}
                removeSearch={props.removeSearch}
            />
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
                    auth={props.auth}
                    handleLikedToggle={handleLikedToggle}
                />
            </div>
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
