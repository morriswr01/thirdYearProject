import axios from "axios";

import { SET_SELECTED_LISTING, GET_LISTINGS } from "./types";

export const setSelectedListing = id => ({
    type: SET_SELECTED_LISTING,
    payload: id
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
