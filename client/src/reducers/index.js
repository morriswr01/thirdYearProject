import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import listingReducer from "./listingReducer";
import areaReducer from "./areaReducer";
import authReducer from "./authReducer";

export default combineReducers({
    search: searchReducer,
    listings: listingReducer,
    area: areaReducer,
    auth: authReducer,
});
