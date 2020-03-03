import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms,
    getSavedSearches,
    removeSearch,
    setCity
} from "../../actions/searchActions";
import { getListings } from "../../actions/listingActions";
import { logout } from "../../actions/authActions";

// Components
import SearchBox from "./SearchBox";
import SearchTabs from "./SearchTabs";
import SearchFilter from "./SearchFilter";
import LoginContainer from "../Login/LoginContainer";

// SCSS
import "../../assets/stylesheets/index.scss";
import SavedSearches from "./SavedSearches/SavedSearches";

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        };
    }

    componentDidMount() {
        this.props.getSavedSearches();
    }

    handleTabChange = tab => {
        this.setState({ tab: tab });
    };

    // Get postcode and latitude/longitude from the search box component
    handleSearchTextChange = (postcode, latlng, city) => {
        const location = { postcode, latlng, city };
        this.props.setLocation(location);
        this.props.setCity(city);
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

    handleSubmit = search => {
        this.props.getListings(search);
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
                    <div className='search-heading search-title'>
                        Pins
                        {/* <h3 className='search-title'>Pins</h3> */}
                    </div>
                </header>
                {/* Search Function and filtering */}
                <div className='search-function'>
                    <SearchBox
                        handleSearchTextChange={this.handleSearchTextChange}
                        handleCityChange={this.props.setCity}
                    />
                    {/* Search Tabs */}
                    <SearchTabs handleToggleChange={this.handleTabChange} />
                    <div
                        className={
                            this.state.tab === 2
                                ? "controlsContainer saved"
                                : "controlsContainer"
                        }
                    >
                        {/* Filtering Section */}
                        <SearchFilter
                            search={this.props.search}
                            handleSubmit={this.handleSubmit}
                            handleFilterChange={this.handleFilterChange}
                        />
                        <SavedSearches
                            handleChanges={this.handleSearchTextChange}
                            getListings={this.props.getListings}
                            savedSearches={this.props.savedSearches}
                            auth={this.props.auth}
                            handleSubmit={this.handleSubmit}
                            removeSearch={this.props.removeSearch}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        savedSearches: state.search.savedSearches,
        search: state.search,
        listings: state.listings,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {
    getListings,
    setCity,
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms,
    getSavedSearches,
    removeSearch,
    logout
})(SearchScreen);
