import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { setSelectedListing } from "../../../actions/listingActions";

function Listing(props) {
    const {
        img_url,
        price_formatted,
        summary,
        title,
        bedroom_number
    } = props.listing;

    return (
        <div
            className={
                props.listingNumber === props.selectedListing.listingNumber
                    ? "sidebarListing selected"
                    : "sidebarListing"
            }
            onClick={() =>
                props.setSelectedListing({
                    ...props.listing,
                    listingNumber: props.listingNumber
                })
            }
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
                                e.stopPropagation();
                            }}
                        >
                            <FontAwesomeIcon className='heart' icon={faHeart} />
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
