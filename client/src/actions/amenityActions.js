import { SET_LOCAL_AMENITIES } from "./types";

// Get the area data for a given location and bedroom number
export const getLocalAmenities = () => (getState, dispatch) => {
    const { latlng } = getState().search.location;
    const amenities = [];

    // Some api call to get dem amenities

    dispatch({
        type: SET_LOCAL_AMENITIES,
        payload: amenities
    });
};
