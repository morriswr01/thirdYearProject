// import {} from '../actions'


const initialState = {
    location : {
        postcode: "",
        latlng: {}
    },
    houseTypes: [],
    searchRadius: null,
    housePrice: { min: 0, max: 1000000 },
    numBedrooms: { min: 1, max: 5 }
};

export default (state = initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
};
