import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSelectedListing } from "../../actions/listingActions";

function FullScreenListing(props) {
    const { listings } = props;

    return (
        <div
            className='fullscreenListing'
            onClick={() =>
                props.setSelectedListing(props.selectedListing + 1)
            }
        ></div>
    );
}

FullScreenListing.propTypes = {
    listings: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    // location: state.search.location,
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(FullScreenListing);
