import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AreaInfo from "./AreaInfo";
import HouseInfo from "./HouseInfo";

// Redux
import { setSelectedListing } from "../../../actions/listingActions";
import { logout } from "../../../actions/authActions";

function FullScreenListing(props) {
    // On component mount, getAreaAnalytics(location)

    return (
        <div className='fullscreenListing'>
            <HouseInfo
                selectedListing={props.selectedListing}
                setSelectedListing={props.setSelectedListing}
                auth={props.auth}
                logout={props.logout}
            />
            <AreaInfo />
        </div>
    );
}

FullScreenListing.propTypes = {
    selectedListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    selectedListing: state.listings.selectedListing,
    auth: state.auth
});

export default connect(mapStateToProps, {
    setSelectedListing,
    logout
})(FullScreenListing);
