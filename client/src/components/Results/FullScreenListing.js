import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSelectedListing } from "../../actions/listingActions";

function FullScreenListing(props) {
    return (
        <div
            className='fullscreenListing'
            onClick={() =>
                props.setSelectedListing({})
            }
        ></div>
    );
}

const mapStateToProps = state => ({
    // location: state.search.location,
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(FullScreenListing);
