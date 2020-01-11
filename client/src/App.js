// Module Imports
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import global store
import store from "./store";

// Component Imports
import Search from "./components/Search/SearchScreen";
import Listings from "./components/Results/Listings";

// CSS
import "./assets/stylesheets/index.scss";

export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route path='/listings' component={Listings} />
                    <Route path='/' exact component={Search} />
                </Switch>
            </Provider>
        </Router>
    );
}