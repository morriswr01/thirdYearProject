import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSelectedListing } from "../../../actions/listingActions";

class Listing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            img_url,
            price_formatted,
            summary,
            title,
            bedroom_number
        } = this.props.listing;

        return (
            <div
                // className='sidebarListing'
                className={
                    this.props.listingNumber == this.props.selectedListing
                        ? "sidebarListing selected"
                        : "sidebarListing"
                }
                onClick={() =>
                    this.props.setSelectedListing(this.props.listingNumber)
                }
            >
                <img src={img_url} alt='House' className='sidebarListingImg' />
                <div className='sidebarListingInfo'>
                    <h3 className='title'>{title}</h3>
                    <p className='summary'>{summary}</p>
                    <p className='bedNum'>Bedrooms: {bedroom_number}</p>
                    <h5 className='price'>{price_formatted}</h5>
                </div>
            </div>
        );
    }
}

Listing.propTypes = {
    listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // location: state.search.location,
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(Listing);
