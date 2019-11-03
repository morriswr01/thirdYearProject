import React from "react";
import { Button } from "reactstrap";

// SCSS
import "../assets/stylesheets/index.scss";

export default function Search() {
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
            <div className="search-box">
                
            </div>
        </div>
    );
}
