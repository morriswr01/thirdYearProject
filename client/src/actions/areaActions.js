import axios from "axios";

import { SET_AREA_DATA } from "./types";

// Get the area data for a given location and bedroom number
export const getAreaData = searchObj => dispatch => {
    const { location, numBedrooms } = searchObj;

    axios
        .post("/api/area/data?", {
            location,
            numBedrooms
        })
        .then(res => {
            console.log(res.data);
            const {
                location,
                numBedrooms,
                soldPrices,
                growth,
                rent,
                demand,
                crime,
                demographics,
                schools
            } = res.data;
            let successData = { location, numBedrooms };
            if (res.data.soldPrices.status === "success") {
                successData = { ...successData, soldPrices };
            }
            if (res.data.growth.status === "success") {
                successData = { ...successData, growth };
            }
            if (res.data.rent.status === "success") {
                successData = { ...successData, rent };
            }
            if (res.data.demand.status === "success") {
                successData = { ...successData, demand };
            }
            if (res.data.crime.status === "success") {
                successData = { ...successData, crime };
            }
            if (res.data.demographics.status === "success") {
                successData = { ...successData, demographics };
            }
            if (res.data.schools.status === "success") {
                successData = { ...successData, schools };
            }

            dispatch({
                type: SET_AREA_DATA,
                payload: successData
            });
        })
        .catch(err => console.log(err.response.data));
};
