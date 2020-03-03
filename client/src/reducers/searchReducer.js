import {
    SET_LOCATION,
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS,
    SET_HOUSE_PRICE,
    SET_NUM_BEDROOMS,
    SAVE_SEARCH,
    REMOVE_SEARCH,
    GET_SAVED_SEARCHES,
    SET_CITY
} from "../actions/types";

const initialState = {
    _id: "1",
    location: {
        postcode: "LS167PT",
        latlng: {
            lat: 53.8539,
            lng: -1.62415
        }
    },
    city: "",
    houseTypes: [],
    searchRadius: 1,
    savedSearches: [],
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
        case SET_CITY:
            return {
                ...state,
                city: action.payload
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
        case SET_NUM_BEDROOMS:
            return {
                ...state,
                numBedrooms: action.payload
            };
        case SAVE_SEARCH:
            return {
                ...state,
                ...action.payload,
                savedSearches: [...state.savedSearches, action.payload]
            };
        case REMOVE_SEARCH:
            return {
                ...state,
                _id: "1",
                savedSearches: state.savedSearches.filter(
                    savedSearch => action.payload._id !== savedSearch._id
                )
            };
        case GET_SAVED_SEARCHES:
            return {
                ...state,
                savedSearches: action.payload
            };
        default:
            return state;
    }
};
