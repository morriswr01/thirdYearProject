import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import '../../../assets/stylesheets/index.scss'

import LoginModal from "../../Login/LoginModal";

export default function Nav(props) {
    return (
        <div className='nav'>
            <LoginModal />
            <button className='compare'>Compare</button>
            <button
                className='back'
                onClick={() => props.setSelectedListing({})}
            >
                <FontAwesomeIcon icon={faArrowRight} /> Back
            </button>
        </div>
    );
}
