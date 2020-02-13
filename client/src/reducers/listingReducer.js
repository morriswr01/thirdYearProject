import {
    SET_SELECTED_LISTING,
    GET_LISTINGS,
    SET_LISTING_LIKED,
    SET_SORT_BY
} from "../actions/types";

// eslint-disable-next-line
import { listings } from "./static/listing";

// REMOVE BEFORE FINISHING
const filterListings = listings => {
    const listingsWithId = listings.map(listing => {
        return {
            ...listing,
            _id: listing.latitude,
            liked: false
        };
    });

    // Filter listings for duplicate IDs
    let finalListings = [];
    listingsWithId.filter(listing => {
        const i = finalListings.findIndex(x => x._id === listing._id);
        if (i <= -1) {
            finalListings.push(listing);
        }
        return null;
    });

    return finalListings;
};
// ========================== REMOVE =================

const initialState = {
    selectedListing: {},
    fullscreen: false,
    sortBy: "",
    listings: [],
    numListings: 203,
    // listings: filterListings(listings),
    favourites: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                result: action.payload.data,
                numListings: action.payload.response.total_results,
                listings: filterListings(action.payload.response.listings)
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
        case SET_LISTING_LIKED:
            return {
                ...state,
                listings: action.payload
            };
        default:
            return state;
    }
};
