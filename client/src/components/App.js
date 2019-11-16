// Module Imports
import React from "react";
import { Provider } from 'react-redux';

// Import global store
import store from '../store'

// Component Imports
import Search from "./Search/SearchScreen";
import MapScreen from "./Results/MapScreen"

// CSS
import "../assets/stylesheets/index.scss";

export default function App() {
    return (
        <Provider store={store}>
            <Search />;
        </Provider>
    // return <MapScreen />;
    )
}