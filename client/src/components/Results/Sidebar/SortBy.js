import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import { setSortBy } from "../../../actions/listingActions";

class SortBy extends Component {
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

    handleSortByChange = sortBy => {
        this.props.setSortBy(sortBy);
    };

    render() {
        return (
            <div className='sortAndFilter'>
                {/* Sort By */}
                <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                >
                    <DropdownToggle caret color='primary'>
                        Sort By
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={this.handleSortByChange.bind(
                                this,
                                "priceLowHigh"
                            )}
                        >
                            Price: Low - High
                        </DropdownItem>
                        <DropdownItem
                            onClick={this.handleSortByChange.bind(
                                this,
                                "priceHighLow"
                            )}
                        >
                            Price: High - Low
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    sortBy: state.listings.sortBy
});

export default connect(mapStateToProps, { setSortBy })(SortBy);
