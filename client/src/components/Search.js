import React from "react";
import { Button } from "reactstrap";

// scss
import "../assets/stylesheets/index.scss";

export default function Search() {
    return (
        <div>
            <div className='App grid-container'>
                {/* Header of search screen */}
                <header className='search-header'>
                    {/* Login and registration buttons */}
                    <div className="btnContainer">
                        <Button color="primary"> Login </Button>
                        <Button color="danger"> Register </Button>
                    </div>
                    {/* Title and subheading */}
                    <h1 className='search-title'>Pins</h1>
                    <h3 className='search-subtitle'>
                        &lt; Some Catchy Title &gt;
                    </h3>
                </header>


                {/* Search Function and filtering */}
            </div>
        </div>
    );
}
