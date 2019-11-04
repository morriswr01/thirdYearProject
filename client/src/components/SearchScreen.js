import React from "react";
import { Button } from "reactstrap";

import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";

// SCSS
import "../assets/stylesheets/index.scss";

export default function SearchScreen() {
    return (
        <div className="search">
            {/* Login and registration buttons */}
            <div className='nav-container clearfix'>
                {/* Login and registration buttons */}
                <Button> Login </Button>
                <Button> Register </Button>
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
                <SearchBox />
                {/* Filtering Section */}
                <SearchFilter />
            </div>
        </div>
    );
}