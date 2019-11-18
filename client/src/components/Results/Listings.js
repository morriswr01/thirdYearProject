import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Map from "./Map";

class Listings extends Component {
    constructor(props) {
        super(props);
        console.log(props.listings)
        console.log(props.listings.length === 0)
    }
    render() {
        return (this.props.listings.length) === 0 ? (
            <Redirect to='/' />
        ) : (
            <div>
                <Map />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listings: state.search.listings
});

export default connect(mapStateToProps)(Listings);
