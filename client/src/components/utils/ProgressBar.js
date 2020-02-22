import React, { Component } from "react";

import "../../..../../assets/stylesheets/utils/progressBar.scss";

export default function ProgressBar(props) {
    const { percentage, color } = props;

    return (
        <div>
            <div className='progress-bar'>
                <div
                    className='filler'
                    style={{
                        width: `${percentage * 100}%`,
                        backgroundColor: color
                    }}
                />
            </div>
        </div>
    );
}
