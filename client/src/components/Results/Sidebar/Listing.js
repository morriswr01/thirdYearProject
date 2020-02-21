import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { setSelectedListing } from "../../../actions/listingActions";

import "../../../assets/stylesheets/sidebar/sidebarListing.scss";

function Listing(props) {
    const toggleLiked = () => {
        props.handleLikedToggle(props.listing);
    };

    const {
        img_url,
        price_formatted,
        summary,
        title,
        bedroom_number,
        id
    } = props.listing;

    return (
        <div
            className={
                id === props.selectedListing.id
                    ? "sidebarListing selected"
                    : "sidebarListing"
            }
            onClick={() => {
                props.setSelectedListing({
                    ...props.listing,
                    listingNumber: id
                });
            }}
        >
            <div className='sidebarListingInfo'>
                <img src={img_url} alt='House' className='sidebarListingImg' />
                <div className='titleContainer'>
                    <h3 className='title'>{title}</h3>
                </div>
                <div className='listingInfo'>
                    <p className='summary'>{summary}</p>
                    <p className='bedNum'>Bedrooms: {bedroom_number}</p>
                </div>
                <div className='priceContainer'>
                    {/* <div className='infoBar'> */}
                    <h5 className='price'>{price_formatted}</h5>
                    <span
                        onClick={e => {
                            toggleLiked();
                            e.stopPropagation();
                        }}
                    >
                        <FontAwesomeIcon
                            className={
                                props.listing.liked ? "heart active" : "heart"
                            }
                            icon={faHeart}
                        />
                    </span>
                </div>
                {/* </div> */}
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
