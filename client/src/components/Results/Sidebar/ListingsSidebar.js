import React, { useState } from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";
import ResultsTitle from "./ResultsTitle";
import SortAndFilter from "./SortAndFilter/SortAndFilter";
import Listings from "./Listings";
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
            <ResultsTitle numListings={numListings} />
            <SortAndFilter
                radioButtons={radioButtons}
                handleToggleChange={handleToggleChange}
            />
            <div
                className={
                    radioButtons == 2
                        ? "sidebarListingsContainer favourites"
                        : "sidebarListingsContainer"
                }
            >
                <Listings listings={listings} />
                <Favourites listings={listings} />
            </div>
        </div>
    );
}

ListingsSidebar.propTypes = {
    listings: PropTypes.array.isRequired
};
