import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
} from "../../actions/searchActions";
import { getListings } from "../../actions/listingActions";
import { logout } from "../../actions/authActions";

// Aesthetic
import { Button } from "reactstrap";

// Components
import SearchBox from "./SearchBox";
import SearchFilter from "./SearchFilter";
import LoginContainer from "../Login/LoginContainer";

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
        return this.props.listings.listings.length !== 0 ? (
            <Redirect to='/listings' />
        ) : (
            // return (
            <div className='search'>
                {/* Login and registration buttons */}
                <div className='nav-container clearfix'>
                    {/* Login and registration buttons */}
                    <LoginContainer
                        auth={this.props.auth}
                        logout={this.props.logout}
                    />
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
    return {
        listings: state.listings,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {
    getListings,
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms,
    logout
})(SearchScreen);
