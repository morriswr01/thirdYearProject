import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../../../../assets/stylesheets/index.scss";

import LoginContainer from "../../../Login/LoginContainer";

export default function Nav(props) {
    return (
        <div className='nav'>
            <div className='buttonsContainer'>
                <div className='fullscreenLogin'>
                    {/* Login and registration buttons */}
                    <LoginContainer auth={props.auth} logout={props.logout} />
                </div>
                <button
                    className='back'
                    onClick={() => {
                        props.setSelectedListing({});
                        props.clearSelectedListing();
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight} /> Back
                </button>
            </div>
        </div>
    );
}
