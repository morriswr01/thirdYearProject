import React from "react";

import SaveSearch from "./SaveSearch";

import "../../../assets/stylesheets/sidebar/resultsTitle.scss";
import { get } from "mongoose";

export default function ResultsTitle(props) {
    const getCity = () => {
        if (props.search.city !== undefined && props.search.city !== "") {
            return `${props.search.city}, `;
        }
        return "";
    };

    return (
        <div className='searchBar'>
            <div className='resultTitle'>
                <h1>
                    {props.numListings} Results for{" "}
                    <p className='searchAddress'>
                        {getCity()}
                        {props.search.location.postcode}{" "}
                    </p>
                </h1>
            </div>
            {props.auth.isAuthenticated ? (
                <SaveSearch
                    saveSearch={props.saveSearch}
                    removeSearch={props.removeSearch}
                />
            ) : (
                ""
            )}
        </div>
    );
}
