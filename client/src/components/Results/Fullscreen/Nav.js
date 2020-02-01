import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Nav(props) {
    return (
        <div className='nav'>
            <button className='login'>Login</button>
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
