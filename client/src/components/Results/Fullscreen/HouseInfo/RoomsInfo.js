import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet } from "@fortawesome/free-solid-svg-icons";

import "../../../../assets/stylesheets/fullscreen/roomsInfo.scss";

export default function RoomsInfo(props) {
    return (
        <div className='roomsContainer'>
            <div className='room'>
                <h4>Bedrooms</h4>
                <FontAwesomeIcon size="lg" icon={faBed} className='roomIcon' />
                {props.bedroom_number}
            </div>
            <div className='room'>
                <h4>Bathrooms</h4>
                <FontAwesomeIcon size="lg" icon={faToilet} className='roomIcon' />
                {1}
            </div>
        </div>
    );
}
