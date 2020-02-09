import axios from "axios";

import {
    SET_SELECTED_LISTING,
    GET_LISTINGS,
    SET_SORT_BY,
    SET_LISTING_LIKED
} from "./types";

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
            // const data1 = {
            //     result: res.data,
            //     totalResults: res.response.total_results,
            //     listings: filterListings(res.response.listings)
            // };
            console.log(res.data);
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

export const setListingLiked = id => (dispatch, getState) => {
    const { listings, favourites } = getState().listings;
    console.log(id);

    const newListings = listings.map(listing => {
        if (id === listing._id) return { ...listing, liked: !listing.liked };
        else {
            return listing;
        }
    });

    dispatch({
        type: SET_LISTING_LIKED,
        payload: newListings
    });
};
