import React from "react";

import { Button } from "reactstrap";

import "../../../assets/stylesheets/searchAccordion/searchAccordion.scss";

export default function SavedSearch(props) {
    const getCity = () => {
        if (
            props.savedSearch.city !== undefined &&
            props.savedSearch.city !== ""
        ) {
            return `${props.savedSearch.city}, `;
        }
        return "";
    };

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
                <h5 className='title'>
                    {getCity()}
                    {props.savedSearch.location.postcode}
                </h5>
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
                    <div className='housePrice filter'>
                        <h6>House Price</h6>£{props.savedSearch.housePrice.min}{" "}
                        - £{props.savedSearch.housePrice.max}
                    </div>
                    <div className='bedrooms filter'>
                        <h6>Number Of Bedrooms</h6>
                        {props.savedSearch.numBedrooms.min} -{" "}
                        {props.savedSearch.numBedrooms.max} Bedrooms
                    </div>
                    <div className='searchRadius filter'>
                        <h6>Search Radius</h6>
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
                    <Button
                        color='primary'
                        onClick={e => {
                            props.handleSubmit(props.savedSearch);
                            props.handleChanges(
                                props.savedSearch.location.postcode,
                                props.savedSearch.location.latlng,
                                props.savedSearch.city
                            );
                            e.stopPropagation();
                        }}
                    >
                        Use this Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
