import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AreaInfo from "./AreaInfo";
import HouseInfo from "./HouseInfo/HouseInfo";

// Redux
import {
    setSelectedListing,
    setListingLiked,
    getDetailedData
} from "../../../actions/listingActions";
import { logout } from "../../../actions/authActions";

class FullScreenListing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        // const { selectedListing, fullscreen } = this.props;
        // if (
        //     !fullscreen &&
        //     selectedListing &&
        //     (!selectedListing.description ||
        //         prevProps.selectedListing.id !== selectedListing.id)
        // ) {
        //     console.log(prevProps.selectedListing.id);
        //     console.log(selectedListing.id);
        //     this.props.getDetailedData(selectedListing.lister_url);
        // }
    }

    handleLikedToggle = listing => {
        console.log("Sending like to redux action")
        this.props.setListingLiked(this.props.selectedListing);
    };

    render() {
        return (
            <div className='fullscreenListing'>
                <HouseInfo
                    selectedListing={this.props.selectedListing}
                    setSelectedListing={this.props.setSelectedListing}
                    handleLikedToggle={this.handleLikedToggle}
                    auth={this.props.auth}
                    logout={this.props.logout}
                />
                <AreaInfo />
            </div>
        );
    }
}

FullScreenListing.propTypes = {
    selectedListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    fullscreen: state.listings.fullscreen,
    selectedListing: state.listings.selectedListing,
    auth: state.auth
});

export default connect(mapStateToProps, {
    setListingLiked,
    setSelectedListing,
    getDetailedData,
    logout
})(FullScreenListing);
