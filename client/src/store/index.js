import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import root reducer from reducer/index.js
import rootReducer from '../reducers';

// Compose all the reducers in the root reducer
const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;