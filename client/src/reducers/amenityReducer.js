import { SET_LOCAL_AMENITIES } from "../actions/types";

const initialState = {
    amenities: [
        { name: "Asda Supermarket", location: { lat: 53.8539, lng: -1.62415 } },
        {
            name: "Horsforth School",
            location: { lat: 53.861813, lng: -1.623794 }
        },
        { name: "Asda Supermarket", location: { lat: 53.8539, lng: -1.62415 } },
        {
            name: "Horsforth School",
            location: { lat: 53.861813, lng: -1.623794 }
        },
        { name: "Asda Supermarket", location: { lat: 53.8539, lng: -1.62415 } }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCAL_AMENITIES:
            return {
                ...state,
                amenities: action.payload
            };
        default:
            return state;
    }
};
