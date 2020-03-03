import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AreaInfo from "./AreaInfo/AreaInfo";
import HouseInfo from "./HouseInfo/HouseInfo";

// Redux
import {
    setSelectedListing,
    setListingLiked,
    getDetailedData,
    clearSelectedListing
} from "../../../actions/listingActions";
import { getAreaData } from "../../../actions/areaActions";
import { logout } from "../../../actions/authActions";

function FullScreenListing(props) {
    const handleLikedToggle = () => {
        props.setListingLiked(props.selectedListing);
    };
    return (
        <div className='fullscreenListing'>
            <HouseInfo
                selectedListing={props.selectedListing}
                setSelectedListing={props.setSelectedListing}
                handleLikedToggle={handleLikedToggle}
                area={props.area}
                auth={props.auth}
                logout={props.logout}
                clearSelectedListing={props.clearSelectedListing}
            />
            <AreaInfo
                search={props.search}
                getAreaData={props.getAreaData}
                area={props.area}
            />
        </div>
    );
}

FullScreenListing.propTypes = {
    selectedListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    fullscreen: state.listings.fullscreen,
    selectedListing: state.listings.selectedListing,
    search: state.search,
    area: state.area,
    auth: state.auth
});

export default connect(mapStateToProps, {
    setListingLiked,
    setSelectedListing,
    getDetailedData,
    getAreaData,
    logout,
    clearSelectedListing
})(FullScreenListing);
