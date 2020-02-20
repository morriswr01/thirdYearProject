import axios from "axios";

import { GET_AREA_DATA } from "./types";

// Get the area data for a given location and bedroom number
export const getAreaData = searchObj => dispatch => {
    const { location, numBedrooms } = searchObj;

    axios
        .post("/api/area/data?", {
            location,
            numBedrooms
        })
        .then(res => {
            dispatch({
                type: GET_AREA_DATA,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.data));
};
