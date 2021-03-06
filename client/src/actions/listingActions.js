import axios from "axios";

import {
    SET_SELECTED_LISTING,
    GET_LISTINGS,
    SET_SORT_BY,
    SET_LISTING_LIKED,
    GET_FAVOURITES,
    CLEAR_FAVOURITES,
    CLEAR_LIKE_BUTTONS,
    SET_FAVOURITE,
    GET_DETAILED_DATA,
    CLEAR_SELECTED_LISTING
} from "./types";

import { tokenConfig } from "./authActions";

// const filterListings = listings => {
//     const listingsWithId = listings.map(listing => {
//         return {
//             ...listing,
//             id: listing.latitude,
//             liked: false
//         };
//     });

//     // Filter listings for duplicate IDs
//     let finalListings = [];
//     listingsWithId.filter(listing => {
//         const i = finalListings.findIndex(x => x.id === listing.id);
//         if (i <= -1) {
//             finalListings.push(listing);
//         }
//         return null;
//     });

//     return finalListings;
// };

export const setSelectedListing = listingObj => dispatch => {
    dispatch({
        type: SET_SELECTED_LISTING,
        payload: listingObj
    });
    // dispatch(getDetailedData(listingObj.lister_url));
};

export const getListings = search => (dispatch, getState) => {
    const {
        location,
        houseTypes,
        searchRadius,
        housePrice,
        numBedrooms
    } = search;

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

export const getFavourites = () => (dispatch, getState) => {
    axios
        .get("/api/favourites", tokenConfig(getState))
        .then(res => {
            const favourites = res.data;
            let listings = getState().listings.listings;
            const newListings = listings.map(listing => {
                let listingIsFavourite = false;
                favourites.forEach(favourite => {
                    if (favourite.id === listing.id) {
                        listingIsFavourite = true;
                    }
                });
                return listingIsFavourite
                    ? { ...listing, liked: true }
                    : listing;
            });
            dispatch({
                type: GET_FAVOURITES,
                payload: favourites
            });
            dispatch({
                type: SET_LISTING_LIKED,
                payload: newListings
            });
        })
        .catch(err => console.log(err.response.data));
};

export const getDetailedData = listing_url => dispatch => {
    if (listing_url) {
        axios
            .post("/api/scrape/listing", { url: listing_url })
            .then(res => {
                dispatch({
                    type: GET_DETAILED_DATA,
                    payload: res.data
                });
            })
            .catch(err => console.log(err.response.data));
    }
};

export const setSortBy = sortBy => ({
    type: SET_SORT_BY,
    payload: sortBy
});

export const setListingLiked = favouriteListing => (dispatch, getState) => {
    const { listings } = getState().listings;

    let removeFromDatabase = false;

    listings.forEach(listing => {
        if (favouriteListing.id === listing.id) {
            if (favouriteListing.liked) {
                removeFromDatabase = true;
            }
        }
    });

    console.log(favouriteListing._id);

    if (favouriteListing._id !== undefined) {
        removeFromDatabase = true;
    }

    if (!removeFromDatabase) {
        console.log("adding to the database");

        axios
            .post("/api/favourites", favouriteListing, tokenConfig(getState))
            .then(res => {
                dispatch(setFavourite(favouriteListing.id, true));
                dispatch(getFavourites());
            })
            .catch(err => {
                dispatch(getFavourites());
            });
    } else {
        console.log("removing from the database");
        axios
            .delete("/api/favourites", {
                data: { id: favouriteListing.id },
                headers: { ...tokenConfig(getState).headers }
            })
            .then(res => {
                dispatch(setFavourite(favouriteListing.id, false));
                dispatch(getFavourites());
            })
            .catch(err => {
                dispatch(getFavourites());
            });
    }
};

export const setFavourite = (id, value) => ({
    type: SET_FAVOURITE,
    payload: { id, value }
});

export const clearFavourites = () => ({
    type: CLEAR_FAVOURITES
});

export const clearSelectedListing = () => ({
    type: CLEAR_SELECTED_LISTING
});

export const clearLikeButtons = () => (dispatch, getState) => {
    let listings = getState().listings.listings;
    const cleared = listings.map(listing => ({ ...listing, liked: false }));
    dispatch({
        type: CLEAR_LIKE_BUTTONS,
        payload: cleared
    });
};
