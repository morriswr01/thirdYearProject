import {
    SET_LOCATION,
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS,
    SET_HOUSE_PRICE,
    SET_NUM_BEDROOMS
} from "../actions/types";

const initialState = {
    location: {
        postcode: "",
        latlng: { lat: 52.4081, lng: -1.5105 }
    },
    houseTypes: [],
    searchRadius: 20,
    housePrice: { min: 0, max: 1000000 },
    numBedrooms: { min: 1, max: 5 }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        case SET_HOUSE_TYPE:
            return {
                ...state,
                houseTypes: action.payload
            };
        case SET_SEARCH_RADIUS:
            return {
                ...state,
                searchRadius: action.payload
            };
        case SET_HOUSE_PRICE:
            return {
                ...state,
                housePrice: action.payload
            };
        case SET_NUM_BEDROOMS:
            return {
                ...state,
                numBedrooms: action.payload
            };
        default:
            return state;
    }
};
