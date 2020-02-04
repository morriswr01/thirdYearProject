import axios from "axios";

import { SET_SELECTED_LISTING, GET_LISTINGS, SET_SORT_BY } from "./types";

export const setSelectedListing = listingObj => ({
    type: SET_SELECTED_LISTING,
    payload: listingObj
});

export const getListings = () => (dispatch, getState) => {
    const {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms
    } = getState().search;

    // console.log(location);

    axios
        .post("/api/listings/nestoria?", {
            location,
            houseTypes,
            searchRadius,
            housePrice,
            numBedrooms
        })
        .then(res => {
            dispatch({
                type: GET_LISTINGS,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.data));
};

export const setSortBy = sortBy => ({
    type: SET_SORT_BY,
    payload: sortBy
});
