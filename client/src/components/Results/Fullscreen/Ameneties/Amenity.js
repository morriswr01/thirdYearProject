import React from "react";

import ProgressBar from "../../../utils/ProgressBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDumbbell,
    faUtensils,
    faSchool,
    faTree,
    faMailBulk,
    faPizzaSlice,
    faPlane,
    faTrain
} from "@fortawesome/free-solid-svg-icons";

export default function Amenity(props) {
    const { name, distance, number } = props;

    let distInM = Math.round(distance * 1000);

    const getIcon = type => {
        switch (type) {
            case "gym":
                return <FontAwesomeIcon size='sm' icon={faDumbbell} />;
            case "restaurant":
                return <FontAwesomeIcon size='sm' icon={faUtensils} />;
            case "primary_school":
                return <FontAwesomeIcon size='sm' icon={faSchool} />;
            case "secondary_school":
                return <FontAwesomeIcon size='sm' icon={faSchool} />;
            case "park":
                return <FontAwesomeIcon size='sm' icon={faTree} />;
            case "post_office":
                return <FontAwesomeIcon size='sm' icon={faMailBulk} />;
            case "airport":
                return <FontAwesomeIcon size='sm' icon={faPlane} />;
            case "supermarket":
                return <FontAwesomeIcon size='sm' icon={faPizzaSlice} />;
            case "train_station":
                return <FontAwesomeIcon size='sm' icon={faTrain} />;
        }
    };

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
                <div className='desc'>
                    <div className='icon'>{getIcon(props.type)}</div>
                    <div className='name'>{name}</div>
                </div>
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
