import React from "react";
import { connect } from "react-redux";
import { ButtonDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import Filters from "./Filters";

import {
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
} from "../../../../actions/searchActions";
import { getListings } from "../../../../actions/listingActions";

class FilterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    handleSubmit = () => {
        this.props.getListings();
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

    render() {
        return (
            <div className='filterContainer'>
                <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    className='dropdown'
                >
                    <DropdownToggle caret color='primary'>
                        Filter
                    </DropdownToggle>
                    <DropdownMenu className='menu'>
                        <Filters
                            {...this.props}
                            handleSubmit={this.handleSubmit}
                            handleFilterChange={this.handleFilterChange}
                        />
                    </DropdownMenu>
                </ButtonDropdown>
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
    getListings,
    setLocation,
    setHouseType,
    setSearchRadius,
    setHousePrice,
    setNumBedooms
})(FilterContainer);
