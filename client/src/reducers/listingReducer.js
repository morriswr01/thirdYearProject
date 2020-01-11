import {
    SET_SELECTED_LISTING
    // GET_SELECTED_LISTING
} from "../actions/types";

const initialState = {
    selectedListing: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_LISTING:
            return {
                ...state,
                selectedListing: action.payload
            };
        // case GET_SELECTED_LISTING:
        //     break;
        default:
            return state;
    }
};
