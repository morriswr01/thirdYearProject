import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import {
    getListings,
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
} from "../../actions/searchActions";

// Aesthetic
import { Button } from "reactstrap";

// Components
import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";

// SCSS
import "../../assets/stylesheets/index.scss";

class SearchScreen extends Component {
    // Get postcode and latitude/longitude from the search box component
    handleSearchTextChange = (postcode, latlng) => {
        const location = { postcode, latlng };
        this.props.setLocation(location);
    };

    // Get updated sliders from filter box
    // ========= FIX THIS ==================
    handleFilterChange = (key, values) => {
        switch (key) {
            case "SET_HOUSE_PRICE":
                this.props.setHousePrice(values);
                break;
            case "SET_NUM_BEDROOMS":
                this.props.setNumBedooms(values);
                break;
            case "SET_HOUSE_TYPE":
                this.props.setHouseType(values);
                break;
            case "SET_SEARCH_RADIUS":
                this.props.setSearchRadius(values);
                break;
            default:
                break;
        }
    };

    handleSubmit = () => {
        this.props.getListings();
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

const mapStateToProps = state => {
    const {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms,
        result
    } = state.search;

    return {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms,
        result
    };
};

export default connect(mapStateToProps, {
    getListings,
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
})(SearchScreen);
