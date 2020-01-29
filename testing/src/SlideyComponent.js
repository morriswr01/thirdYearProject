import React, { Component } from "react";

import logo from "./logo.svg";

export default class SlideyComponent extends Component {
    render() {
        let visibility = "show";

        if (!this.props.visible) {
            visibility = "hide";
        }

        return (
            <div className={"SlideyComponent " + visibility}>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </div>
        );
    }
}
