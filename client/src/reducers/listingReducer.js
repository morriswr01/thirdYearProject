import {
    SET_SELECTED_LISTING,
    GET_LISTINGS,
    SET_LISTING_LIKED,
    SET_SORT_BY,
    GET_FAVOURITES,
    CLEAR_FAVOURITES,
    CLEAR_LIKE_BUTTONS,
    SET_FAVOURITE,
    GET_DETAILED_DATA
} from "../actions/types";

// eslint-disable-next-line
import { listings } from "./static/listing";

// REMOVE BEFORE FINISHING
const filterListings = listings => {
    const listingsWithId = listings.map(listing => {
        return {
            ...listing,
            id: listing.latitude,
            liked: false
        };
    });

    // Filter listings for duplicate IDs
    let finalListings = [];
    listingsWithId.filter(listing => {
        const i = finalListings.findIndex(x => x.id === listing.id);
        if (i <= -1) {
            finalListings.push(listing);
        }
        return null;
    });

    return finalListings;
};
// ========================== REMOVE =================

const initialState = {
    selectedListing: {
        description: ""
    },
    fullscreen: false,
    sortBy: "",
    // listings: [],
    numListings: 203,
    listings: filterListings(listings),
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
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };
        case CLEAR_FAVOURITES:
            return {
                ...state,
                favourites: []
            };
        case CLEAR_LIKE_BUTTONS:
            return {
                ...state,
                listings: action.payload
            };
        case SET_FAVOURITE:
            return {
                ...state,
                listings: state.listings.map(listing =>
                    listing.id === action.payload.id
                        ? { ...listing, liked: action.payload.value }
                        : listing
                ),
                selectedListing:
                    state.selectedListing.id === action.payload.id
                        ? {
                              ...state.selectedListing,
                              liked: action.payload.value
                          }
                        : state.selectedListing
            };
        case SET_SELECTED_LISTING:
            return {
                ...state,
                fullscreen: action.payload.id === state.selectedListing.id,
                selectedListing: { ...state.selectedListing, ...action.payload }
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
        case GET_DETAILED_DATA:
            return {
                ...state,
                selectedListing: {
                    ...state.selectedListing,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
