import React from "react";
import PropTypes from "prop-types";

export default function Listing(props) {
    const {
        img_url,
        price_formatted,
        summary,
        title,
        bedroom_number,
    } = props.listing;

    return (
        <div className='sidebarListing'>
            <img src={img_url} alt='House' className='sidebarListingImg' />
            <div className='sidebarListingInfo'>
                <h3>{title}</h3>
                <p>{summary}</p>
                <p>{bedroom_number}</p>
                <h5>{price_formatted}</h5>
            </div>
        </div>
    );
}

Listing.propTypes = {
    listing: PropTypes.object.isRequired
};
