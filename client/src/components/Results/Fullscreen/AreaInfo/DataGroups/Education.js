import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import DataGroup from "./utils/DataGroup";

export default function Education(props) {
    const { schools, propDegree } = props;

    return (
        <DataGroup icon={faHome} id='education' key='education'>
            <div className='stringInfo'>
                <h6 className='dataName'>Proportion With Degree</h6>
                <div className='dataString'>{propDegree}%</div>
            </div>
            <div className='stringInfo'>
                <h6 className='dataName'>Average Ofstead Rating</h6>
                <p className='dataString'>{schools.rating}</p>
            </div>
        </DataGroup>
    );
}
