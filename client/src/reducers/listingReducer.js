import {
    SET_SELECTED_LISTING
    // GET_SELECTED_LISTING
} from "../actions/types";

const initialState = {
    selectedListing: null,
    fullscreen: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_LISTING:
            return {
                ...state,
                fullscreen: action.payload == state.selectedListing,
                selectedListing: action.payload
            };
        // case GET_SELECTED_LISTING:
        //     break;
        default:
            return state;
    }
};
