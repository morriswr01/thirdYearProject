import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AreaInfo from "./AreaInfo";
import HouseInfo from "./HouseInfo";

// Redux
import { setSelectedListing } from "../../../actions/listingActions";

function FullScreenListing(props) {
    // On component mount, getAreaAnalytics(location)

    return (
        <div
            className='fullscreenListing'
            onClick={() => props.setSelectedListing({})}
        >
            <HouseInfo selectedListing={props.selectedListing} />
            <AreaInfo />
        </div>
    );
}

FullScreenListing.propTypes = {
    selectedListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(FullScreenListing);
