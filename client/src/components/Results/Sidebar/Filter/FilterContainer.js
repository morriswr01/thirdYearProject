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
                        <Filters />
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
        numBedrooms,
        result
    } = state.search;

    const { listings } = state.listings;

    return {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms,
        result,
        listings
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
