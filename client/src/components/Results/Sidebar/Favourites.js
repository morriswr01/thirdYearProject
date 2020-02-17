import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Listing from "./Listing";
import LoginModal from "../../Login/LoginModal";
import RegisterModal from "../../Login/RegisterModal";

export default function Favourites(props) {
    const handleLikedToggle = id => {
        props.handleLikedToggle(id);
    };

    return (
        <div className='favouriteListings'>
            {!props.auth.isAuthenticated ? (
                <div className='loginButtons favouritesLogin'>
                    <div className='largeHeartContainer'>
                        <FontAwesomeIcon
                            className='heart'
                            icon={faHeart}
                        />
                    </div>
                    <h2>Please Login To Save Your Favourites</h2>
                    <Fragment>
                        <RegisterModal />
                        <LoginModal />
                    </Fragment>
                </div>
            ) : (
                props.favourites.map(listing => (
                    <Listing
                        key={listing._id}
                        listing={listing}
                        handleLikedToggle={handleLikedToggle}
                    />
                ))
            )}
        </div>
    );
}
