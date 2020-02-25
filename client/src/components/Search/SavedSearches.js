import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Login/RegisterModal";

export default function SavedSearches(props) {
    return (
        <div className='search-savedSearches'>
            {!props.auth.isAuthenticated ? (
                <div className='loginButtons savedSearchesLogin'>
                    <div className='largeSearchContainer'>
                        <FontAwesomeIcon className='search' icon={faSearch} />
                    </div>
                    <h2>Please Login To Save Your Searches</h2>
                    <Fragment>
                        <RegisterModal />
                        <LoginModal />
                    </Fragment>
                </div>
            ) : (
                <h1>Yo</h1>
            )}
        </div>
    );
}
