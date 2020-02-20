import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataGroup(props) {
    return (
        <div className='dataGroup' id={props.id}>
            <div className='icon'>
                <FontAwesomeIcon size='2x' icon={props.icon} />
            </div>
            {props.children}
        </div>
    );
}
