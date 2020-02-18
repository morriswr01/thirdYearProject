import React from "react";
import { connect } from "react-redux";

import { getDetailedData } from "../../../../actions/listingActions";

import "../../../../assets/stylesheets/fullscreen/description.scss";

class Description extends React.Component {
    componentDidUpdate() {
        this.props.getDetailedData(this.props.lister_url);
    }

    render() {
        const { props } = this;

        return (
            <div className='description'>
                <h4>Description</h4>
                <p>{props.description ? props.description : props.summary}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fullscreen: state.listings.fullscreen
});

export default connect(mapStateToProps, {
    getDetailedData
})(Description);
