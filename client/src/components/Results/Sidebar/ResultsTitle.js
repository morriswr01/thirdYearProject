import React from "react";

export default function ResultsTitle(props) {
    return (
        <div className='resultTitle'>
            <h1>
                {props.numListings} Results for{" "}
                <p className='searchAddress'>Coventry, CV5 6GB</p>
            </h1>
        </div>
    );
}
