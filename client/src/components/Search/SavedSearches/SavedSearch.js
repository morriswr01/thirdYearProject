import React from "react";

import "../../../assets/stylesheets/searchAccordion/searchAccordion.scss";

export default function SavedSearch(props) {
    return (
        <div className='savedSearchAccItem'>
            <div
                className='accButton'
                onClick={e => {
                    if (props.id !== props.selectedSearch) {
                        props.setSelectedSearch(props.id);
                    }
                    else {
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
                I m selected
            </div>
        </div>
    );
}
