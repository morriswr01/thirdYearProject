import React from "react";
import { InlineIcon } from "@iconify/react";
import { arrowLeft } from "@iconify/icons-fa-solid/arrow-left";

export default function Nav() {
    return (
        <div className='navBar'>
            <a href='/' className='back'>
                <InlineIcon icon={arrowLeft} /> Back
            </a>
            <h1>Pins</h1>
            <div className='loginButtons'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
}
