import { SET_SELECTED_LISTING, GET_LISTINGS } from "../actions/types";

import { listings } from "./listing";

const initialState = {
    selectedListing: {},
    fullscreen: false,
    listings: [],
    // listings: listings
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                result: action.payload,
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
        default:
            return state;
    }
};
