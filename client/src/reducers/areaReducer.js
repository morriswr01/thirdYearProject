import { GET_AREA_DATA } from "../actions/types";

const initialState = {
    location: "",
    numBedrooms: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AREA_DATA:
            const { location, numBedrooms } = action.payload;
            return {
                ...state,
                location,
                numBedrooms
            };
        default:
            return state;
    }
};
