import React, { Component, Fragment } from "react";

// Aesthetic
import { Button } from "reactstrap";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function LoginContainer(props) {
    // render() {
        return (
            <div className='loginButtons authContainer'>
                {!props.auth.isAuthenticated ? (
                    <Fragment>
                        <RegisterModal />
                        <LoginModal />
                    </Fragment>
                ) : (
                    <div className='loggedInBtn'>
                        <p className='nameTag'>
                            Logged In As, {props.auth.user.name}
                        </p>
                        <Button color='primary' onClick={props.logout}>
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        );
    // }
}
