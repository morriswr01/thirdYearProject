import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { setSelectedListing } from "../../../actions/listingActions";

function Listing(props) {
    const toggleLiked = () => {
        props.handleLikedToggle(props.listing._id);
    };

    const {
        img_url,
        price_formatted,
        summary,
        title,
        bedroom_number,
        _id
    } = props.listing;

    return (
        <div
            className={
                _id === props.selectedListing._id
                    ? "sidebarListing selected"
                    : "sidebarListing"
            }
            onClick={() => {
                console.log("Selected house" + _id);
                props.setSelectedListing({
                    ...props.listing,
                    listingNumber: _id
                });
            }}
        >
            <div className='sidebarListingInfo'>
                <img src={img_url} alt='House' className='sidebarListingImg' />
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <p className='summary'>{summary}</p>
                <p className='bedNum'>Bedrooms: {bedroom_number}</p>
                <div className='priceContainer'>
                    <hr></hr>
                    <div className='infoBar'>
                        <h5 className='price'>{price_formatted}</h5>
                        <span
                            onClick={e => {
                                console.log("Heart clicked");
                                toggleLiked();
                                e.stopPropagation();
                            }}
                        >
                            <FontAwesomeIcon
                                className={
                                    props.listing.liked
                                        ? "heart active"
                                        : "heart"
                                }
                                icon={faHeart}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Listing.propTypes = {
    listing: PropTypes.object.isRequired,
    favourite: PropTypes.bool
};

const mapStateToProps = state => ({
    // location: state.search.location,
    selectedListing: state.listings.selectedListing
});

export default connect(mapStateToProps, {
    setSelectedListing
})(Listing);
