// Module Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import global store
import store from "./store";

// Check when app launches
import { loadUser } from "./actions/authActions";

// Component Imports
import Search from "./components/Search/SearchScreen";
import Results from "./components/Results/Results";

// CSS
import "./assets/stylesheets/index.scss";

export default class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Switch>
                        <Route path='/listings' component={Results} />
                        <Route path='/' exact component={Search} />
                    </Switch>
                </Provider>
            </Router>
        );
    }
}
