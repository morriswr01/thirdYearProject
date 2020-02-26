import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

import {
    GET_SEARCH,
    GET_LOCATION,
    SET_LOCATION,
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS,
    SET_HOUSE_PRICE,
    SET_NUM_BEDROOMS,
    GET_SAVED_SEARCHES,
    SAVE_SEARCH,
    REMOVE_SEARCH
} from "./types";

export const getSearch = () => ({
    type: GET_SEARCH
});

export const getSavedSearches = () => (dispatch, getState) => {
    axios
        .get("/api/savedSearches", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SAVED_SEARCHES,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const saveSearch = () => (dispatch, getState) => {
    console.log("Called save search");
    const {
        location,
        houseTypes,
        housePrice,
        numBedrooms,
        searchRadius
    } = getState().search;

    const search = {
        location,
        houseTypes,
        housePrice,
        numBedrooms,
        searchRadius
    };

    axios
        .post("/api/savedSearches", search, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: SAVE_SEARCH,
                payload: res.data
            })
        )
        .catch(err => {
            console.log(err.message);
        });
};

export const removeSearch = _id => (dispatch, getState) => {
    console.log("Called remove search");
    axios
        .delete("/api/savedSearches", {
            data: { _id },
            headers: { ...tokenConfig(getState).headers }
        })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: REMOVE_SEARCH,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err.message);
        });
};

export const getLocation = () => ({
    type: GET_LOCATION
});

export const setLocation = locationObj => ({
    type: SET_LOCATION,
    payload: locationObj
});
export const setHouseType = houseTypes => ({
    type: SET_HOUSE_TYPE,
    payload: houseTypes
});
export const setSearchRadius = searchRadius => ({
    type: SET_SEARCH_RADIUS,
    payload: searchRadius
});
export const setHousePrice = housePrice => ({
    type: SET_HOUSE_PRICE,
    payload: housePrice
});
export const setNumBedooms = numBedrooms => ({
    type: SET_NUM_BEDROOMS,
    payload: numBedrooms
});
