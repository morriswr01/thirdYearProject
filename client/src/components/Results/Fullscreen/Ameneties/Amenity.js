import React from "react";

import ProgressBar from "../../../utils/ProgressBar";

export default function Amenity(props) {
    const { name, distance, number } = props;

    let distInM = Math.round(distance * 1000);

    const colors = [
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "#ffa600"
    ];

    return (
        <div className='amenity'>
            <div className='amenityInfo'>
                <div className='name'>{name}</div>
                <div className='distance'>{distInM}m</div>
            </div>
            <div className='amenityBar'>
                <ProgressBar
                    percentage={distance / props.maxDist}
                    color={colors[number]}
                />
            </div>
        </div>
    );
}
