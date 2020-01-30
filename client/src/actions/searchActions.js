import {
    GET_SEARCH,
    GET_LOCATION,
    SET_LOCATION,
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS,
    SET_HOUSE_PRICE,
    SET_NUM_BEDROOMS
} from "./types";

export const getSearch = () => ({
    type: GET_SEARCH
});
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
