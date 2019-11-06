import React, { useState } from "react";
import { Button } from "reactstrap";

import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";

// SCSS
import "../assets/stylesheets/index.scss";

export default function SearchScreen() {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = e => {
        const { value } = e.target;
        setSearchText(value);
    };

    const handleSubmit = (
        houseTypes,
        searchRadius,
        priceRange,
        numBedrooms
    ) => {
        window.alert(
            ` Location:${searchText}\n Type:${houseTypes}\n SearchRadius:${searchRadius}\n Min Price: ${priceRange.min}\n Max Price: ${priceRange.max}\n MinBedrooms: ${numBedrooms.min}\n MaxBedrooms: ${numBedrooms.max}`
        );
    };

    return (
        <div className='search'>
            {/* Login and registration buttons */}
            <div className='nav-container clearfix'>
                {/* Login and registration buttons */}
                <Button color='primary'> Login </Button>
                <Button color='success'> Register </Button>
            </div>
            {/* Title and subheading */}
            <header className='search-header'>
                <div className='search-heading'>
                    <h1 className='search-title'>Pins</h1>
                    <h3 className='search-subtitle'>
                        &lt; Some Catchy Title &gt;
                    </h3>
                </div>
            </header>
            {/* Search Function and filtering */}
            <div className='search-function'>
                <SearchBox
                    value={searchText}
                    onSearchTextChange={handleSearchTextChange}
                />
                {/* Filtering Section */}
                <SearchFilter onSubmit={handleSubmit} />
            </div>
        </div>
    );
}
