import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className='navBar'>
            <a href='/' className='back'>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </a>
            <h1>Pins</h1>
            <div className='loginButtons'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
}
