import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className='nav'>
            <button className="login">Login</button>
            <button className="compare">Compare</button>
            <button className="back">
                <FontAwesomeIcon icon={faArrowRight} /> Back
            </button>
        </div>
    );
}
