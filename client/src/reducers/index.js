import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import listingReducer from "./listingReducer";
import areaReducer from "./areaReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import amenityReducer from "./amenityReducer";

export default combineReducers({
    search: searchReducer,
    listings: listingReducer,
    area: areaReducer,
    auth: authReducer,
    amenities: amenityReducer,
    error: errorReducer
});
