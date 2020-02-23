import { SET_LOCAL_AMENITIES } from "./types";
import axios from "axios";

// Get the area data for a given location and bedroom number
export const getLocalAmenities = () => (dispatch, getState) => {
    const location = getState().search.location.latlng;

    // Some api call to get dem amenities
    axios
        .post("api/amenities/", location)
        .then(amenities => {
            dispatch({
                type: SET_LOCAL_AMENITIES,
                payload: amenities.data.filter(amenity => amenity !== null)
            });
        })
        .catch(err => console.log(err.message));
};
