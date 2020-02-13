import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LoginContainer from "../../Login/LoginContainer";

export default function Nav(props) {
    return (
        <div className='navBar'>
            <a href='/' className='back'>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </a>
            <h1>Pins</h1>
            {/* Login and registration buttons */}
            <LoginContainer auth={props.auth} logout={props.logout} />
        </div>
    );
}
