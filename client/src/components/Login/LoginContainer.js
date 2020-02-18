import React, { Fragment } from "react";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function LoginContainer(props) {
    return (
        <div className='loginButtons'>
            {!props.auth.isAuthenticated ? (
                <Fragment>
                    <RegisterModal />
                    <LoginModal />
                </Fragment>
            ) : (
                <div className='loggedInBtn loginButtons'>
                    <p className='nameTag'>
                        Logged In As, {props.auth.user.name}
                    </p>
                    <button onClick={props.logout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
