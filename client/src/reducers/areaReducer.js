import { GET_AREA_DATA } from "../actions/types";

import { area } from "./static/area";

const initialState = {
    // location: "",
    // numBedrooms: "",
    // soldPrices: {},
    // growth: {},
    // rent: {},
    // demand: {},
    // crime: {},
    // demographics: {},
    // schools: {},
    // areaType: {},
    // floorArea: {}
    ...area
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AREA_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
