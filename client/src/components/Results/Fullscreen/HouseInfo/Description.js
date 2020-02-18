import React from "react";


import "../../../../assets/stylesheets/fullscreen/description.scss";

export default function Description(props) {
    return (
        <div className="description">
            <h4>Description</h4>
            <p>{props.description}</p>
        </div>
    );
}
