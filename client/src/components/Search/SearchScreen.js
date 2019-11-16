import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import {
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
} from "../../actions/searchActions";
// import PropTypes from "prop-types";

// Aesthetic
import { Button } from "reactstrap";

// Components
import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";

// SCSS
import "../../assets/stylesheets/index.scss";
import {
    SET_NUM_BEDROOMS,
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS
} from "../../actions/types";

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

    handleSubmit = radius => {
        const { location, houseTypes, housePrice, numBedrooms } = this.props;
        const { postcode, latlng } = location;

        window.alert(
            ` Location:${postcode}\n Latlng:${latlng.lat}\n Type:${houseTypes}\n SearchRadius:${radius}\n Min Price: ${housePrice.min}\n Max Price: ${housePrice.max}\n MinBedrooms: ${numBedrooms.min}\n MaxBedrooms: ${numBedrooms.max}`
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
        numBedrooms
    } = state.search;

    return {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms
    };
};

export default connect(mapStateToProps, {
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
})(SearchScreen);
