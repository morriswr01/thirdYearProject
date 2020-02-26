import React from "react";

import { Button } from "reactstrap";

import "../../../assets/stylesheets/searchAccordion/searchAccordion.scss";

export default function SavedSearch(props) {
    return (
        <div className='savedSearchAccItem'>
            <div
                className='accButton'
                onClick={e => {
                    if (props.id !== props.selectedSearch) {
                        props.setSelectedSearch(props.id);
                    } else {
                        props.setSelectedSearch("1");
                    }
                    e.stopPropagation();
                }}
            >
                <h5 className='title'>{props.savedSearch.location.postcode}</h5>
                <p className='date'>
                    Date: {new Date(props.savedSearch.date).getDate()}/
                    {new Date(props.savedSearch.date).getMonth()}
                </p>
            </div>
            <div
                className={
                    props.selectedSearch === props.id
                        ? "accDetails selected"
                        : "accDetails"
                }
            >
                <div className='filters'>
                    <div className='houseTypes'>
                        {props.savedSearch.houseTypes}
                    </div>
                    <div className='housePrice'>
                        £{props.savedSearch.housePrice.min} - £
                        {props.savedSearch.housePrice.max}
                    </div>
                    <div className='bedrooms'>
                        {props.savedSearch.numBedrooms.min} -{" "}
                        {props.savedSearch.numBedrooms.max} Bedrooms
                    </div>
                    <div className='searchRadius'>
                        {props.savedSearch.searchRadius}mi
                    </div>
                </div>
                <div className='footer'>
                    <Button
                        color='danger'
                        onClick={e => {
                            props.removeSearch(props.id);
                            e.stopPropagation();
                        }}
                    >
                        Delete
                    </Button>
                    <Button color='primary'>Use this Search</Button>
                </div>
            </div>
        </div>
    );
}
