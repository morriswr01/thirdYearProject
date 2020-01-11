import { combineReducers } from 'redux';

import searchReducer from './searchReducer'
import listingReducer from './listingReducer'


export default combineReducers({
    search: searchReducer,
    listings: listingReducer
});