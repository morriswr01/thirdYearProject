import React, { Component } from "react";
import { Button } from "reactstrap";

import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";

// SCSS
import "../../assets/stylesheets/index.scss";

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCriteria: {
                postcode: "",
                latlng: {},
                houseTypes: [],
                searchRadius: null,
                housePrice: { min: 0, max: 1000000 },
                numBedrooms: { min: 1, max: 5 }
            }
        };
    };

    // Get postcode and latitude/longitude from the search box component
    handleSearchTextChange = (postcode, latlng) => {
        this.setState({
            searchCriteria: {
                ...this.state.searchCriteria,
                postcode,
                latlng
            }
        });
    };

    // Get updated sliders from filter box
    handleFilterChange = (key, values) => {
        this.setState({
            searchCriteria: {
                ...this.state.searchCriteria,
                [key]: values
            }
        });
    };

    handleSubmit = (radius) => {
        const {postcode, latlng, houseTypes, housePrice, numBedrooms} = this.state.searchCriteria;
        window.alert(
            ` Location:${postcode}\nLatlng:${latlng.lat}\n Type:${houseTypes}\n SearchRadius:${radius}\n Min Price: ${housePrice.min}\n Max Price: ${housePrice.max}\n MinBedrooms: ${numBedrooms.min}\n MaxBedrooms: ${numBedrooms.max}`
        );
    };

    render() {
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
                        value={this.state.searchText}
                        handleSearchTextChange={this.handleSearchTextChange}
                    />
                    {/* Filtering Section */}
                    <SearchFilter
                        handleSubmit={this.handleSubmit}
                        handleFilterChange={this.handleFilterChange}
                    />
                </div>
            </div>
        );
    }
}
