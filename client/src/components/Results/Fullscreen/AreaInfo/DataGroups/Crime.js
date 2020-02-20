import React from "react";

import DataGroup from "./utils/DataGroup";

import { faAngry } from "@fortawesome/free-solid-svg-icons";

export default function Crime(props) {
    const { crime } = props;

    return (
        <DataGroup icon={faAngry} id='crime' key='crime'>
            <div className='stringInfo'>
                <h6 className='dataName'>Crime Rating</h6>
                <p className='dataString'>{crime.crime_rating}</p>
            </div>
            <div className='chartInfo'>
                <h6 className='dataName'>Area Crimes</h6>
                <div className='chart'>Crimes Chart</div>
            </div>
        </DataGroup>
    );
}
