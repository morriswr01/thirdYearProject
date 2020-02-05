import {
    SET_SELECTED_LISTING,
    GET_LISTINGS,
    SET_SORT_BY
} from "../actions/types";

// eslint-disable-next-line
import { listings } from "./static/listing";

const initialState = {
    selectedListing: {},
    fullscreen: false,
    sortBy: "",
    // listings: [],
    numListings: 203,
    listings: listings
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                result: action.payload,
                numListings: action.payload.response.total_results,
                listings: action.payload.response.listings
            };
        case SET_SELECTED_LISTING:
            return {
                ...state,
                fullscreen:
                    action.payload.listingNumber ===
                    state.selectedListing.listingNumber,
                selectedListing: action.payload
            };
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
};
