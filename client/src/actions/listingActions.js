import { SET_SELECTED_LISTING } from "./types";

export const setSelectedListing = id => ({
    type: SET_SELECTED_LISTING,
    payload: id
});
