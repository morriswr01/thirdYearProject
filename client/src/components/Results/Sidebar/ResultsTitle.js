import React from "react";

import SaveSearch from "./SaveSearch";

import "../../../assets/stylesheets/sidebar/resultsTitle.scss";

export default function ResultsTitle(props) {
    return (
        <div className='searchBar'>
            <div className='resultTitle'>
                <h1>
                    {props.numListings} Results for{" "}
                    <p className='searchAddress'>Coventry, CV5 6GB</p>
                </h1>
            </div>
            {props.auth.isAuthenticated ? <SaveSearch /> : ""}
        </div>
    );
}
